const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const Poem = require('./models/Poem');
const Admin = require('./models/Admin');
const bcrypt = require('bcrypt');
const poemsRoutes = require('./routes/poems');
const memoriesRoutes = require('./routes/memories');
const authRoutes = require('./routes/auth');
const proposalRoutes = require('./routes/proposal');
const settingsRoutes = require('./routes/settings');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config();
const defaultPoems = [
	{
		title: 'The Way You Look at Me',
		category: 'Love',
		content: 'When you look at me, the world slows down.\n\nIt feels like every noisy thought disappears and all that remains is the warmth in your eyes. I have never known peace quite like this.\n\nYou make my heart feel brave, my soul feel lighter, and my life feel softer. Every glance feels like a quiet promise that I am safe, wanted, and deeply loved.\n\nI want to hold on to this feeling for as long as life allows me to — through every sunrise, every ordinary moment, and every dream that still has your name in it.',
		order: 1,
		featured: true
	},
	{
		title: 'My Favorite Place',
		category: 'Love',
		content: 'My favorite place is not a city, a beach, or a skyline.\n\nIt is the space where your laughter rests beside mine, where silence feels gentle, and where time stops mattering for a little while.\n\nYou are the home I keep finding, even when I am not looking for it. With you, even the simplest moments feel sacred.\n\nI want to build a life in that place — a life filled with softness, trust, and the kind of love that grows stronger with every passing day.',
		order: 2
	},
	{
		title: 'Forever, If You Say Yes',
		category: 'Forever',
		content: 'I have loved the idea of forever, but I never understood it until you.\n\nNow I can imagine a future where morning kisses mean more than they should, where your hand in mine feels like the most natural thing in the world, and where love is not just a feeling but a choice we make every day.\n\nIf you let me, I want to choose you in every season, in every little moment, and in every future we build together. I want to spend my whole life proving that love can be patient, deep, and true.',
		order: 3
	},
	{
		title: 'The Quiet Between Us',
		category: 'Us',
		content: 'The quiet between us is not empty.\n\nIt is full of comfort, trust, and the kind of tenderness only two people who truly understand each other can share.\n\nThere is a softness in the way we exist together that makes my heart feel safe. I am learning that love is not only fireworks and grand declarations — sometimes it is the steady feeling of wanting to stay, even in the calmest moments.\n\nAnd if I am honest, I want to stay with you for a very long time.',
		order: 4
	}
];

async function seedDefaultContent() {
	try {
		const poemCount = await Poem.countDocuments();
		if (poemCount === 0) {
			await Poem.insertMany(defaultPoems);
			console.log('Seeded default poems');
		}

		const adminCount = await Admin.countDocuments();
		if (adminCount === 0) {
			const passwordHash = await bcrypt.hash(process.env.SEED_ADMIN_PASSWORD || 'changeme', 10);
			await Admin.create({
				email: process.env.SEED_ADMIN_EMAIL || 'admin@example.com',
				passwordHash
			});
			console.log('Seeded default admin');
		}
	} catch (error) {
		console.error('Seed error:', error.message);
	}
}

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(helmet());

const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 100 });
app.use(limiter);

connectDB()
	.then(() => seedDefaultContent())
	.catch((err) => {
		console.error('Mongo connection failed:', err.message);
		process.exit(1);
	});

app.use('/api/poems', poemsRoutes);
app.use('/api/memories', memoriesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/proposal-response', proposalRoutes);
app.use('/api/settings', settingsRoutes);

app.get('/', (req, res) => res.send('Love proposal backend is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// error handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

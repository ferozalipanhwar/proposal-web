const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Poem = require('./models/Poem');
const Memory = require('./models/Memory');
const Admin = require('./models/Admin');
const bcrypt = require('bcrypt');
const connectDB = require('./config/db');

dotenv.config();
const seed = async () => {
  await connectDB();
  await Poem.deleteMany({});
  await Memory.deleteMany({});
  await Admin.deleteMany({});

  const poems = [
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
  await Poem.insertMany(poems);

  const memories = [
    { title: 'First Coffee', description: 'We shared a laugh over coffee', order: 1 },
    { title: 'Rain Walk', description: 'Umbrellas and tiny dances', order: 2 }
  ];
  await Memory.insertMany(memories);

  const passwordHash = await bcrypt.hash(process.env.SEED_ADMIN_PASSWORD || 'changeme', 10);
  await Admin.create({ email: process.env.SEED_ADMIN_EMAIL || 'admin@example.com', passwordHash });

  console.log('Seed complete');
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });

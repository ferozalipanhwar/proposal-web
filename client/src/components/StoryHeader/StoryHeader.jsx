import styles from './StoryHeader.module.css'

const links = [
  { href: '/', label: '🏠 Home' },
  { href: '#story', label: '💖 Story' },
  { href: '#poetry', label: '📖 Poetry' },
  { href: '#memories', label: '🕰️ Memories' },
  { href: '#promises', label: '✨ Promises' },
  { href: '#reasons', label: '💞 Reasons' },
  { href: '#dreams', label: '🌌 Dreams' },
  { href: '#letter', label: '💌 Letter' },
  { href: '#proposal', label: '🫶 Proposal' }
]

export default function StoryHeader(){
  return (
    <header className={styles.header}>
      <div className={styles.brand}>Feroz & You</div>
      <nav className={styles.nav} aria-label="Story navigation">
        {links.map(link => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

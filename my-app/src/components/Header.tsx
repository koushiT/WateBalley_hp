'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <Image
              src="/images/ヘッダーロゴ (1).png"
              alt="合同会社ウォーターバレイ ロゴ"
              width={40}
              height={40}
              style={{
                objectFit: 'contain'
              }}
            />
            <span style={{
              fontFamily: "'Orbitron', 'Exo 2', 'Inter', sans-serif",
              fontWeight: '700',
              fontSize: '1.3rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              WaterValley
            </span>
          </div>
        </Link>
        
        <ul className="nav-menu">
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/about">会社概要</Link></li>
          <li><Link href="/services">事業内容</Link></li>
          <li><Link href="/contact">お問い合わせ</Link></li>
        </ul>
        
        <Link href="/contact" className="cta-button">
          お問い合わせ
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>ホーム</Link></li>
          <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>会社概要</Link></li>
          <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>事業内容</Link></li>
          <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>お問い合わせ</Link></li>
        </ul>
      </div>
    </header>
  )
} 
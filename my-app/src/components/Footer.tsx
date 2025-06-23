import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <nav className="footer-nav">
          <Link href="/">ホーム</Link>
          <Link href="/about">会社概要</Link>
          <Link href="/services">事業内容</Link>
          <Link href="/contact">お問い合わせ</Link>
        </nav>
        <div className="copyright">
          <p>&copy; 2024 合同会社ウォーターバレイ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 
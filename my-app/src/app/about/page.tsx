import Image from 'next/image'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{position: 'relative'}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}>
          <Image
            src="/images/チームワーク.jpeg"
            alt="チームワークのイメージ"
            fill
            style={{objectFit: 'cover'}}
            priority
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.85), rgba(43, 119, 173, 0.75))'
          }} />
        </div>
        <div className="hero-content" style={{
          position: 'relative', 
          zIndex: 2,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.25), rgba(26, 54, 93, 0.2))',
          padding: '4rem 5rem',
          borderRadius: '25px',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          minWidth: '600px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            color: 'white'
          }}>会社概要</h1>
          <p style={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            <span style={{display: 'block'}}>合同会社ウォーターバレイ</span>
            <span style={{display: 'block'}}>について</span>
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="company-info" style={{background: '#f8fafc', padding: '5rem 0'}}>
        <div className="container">
          <div className="company-grid">
            <div>
              <h2 className="section-title" style={{color: '#1a365d', textAlign: 'left'}}>基本情報</h2>
              <div className="company-details" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                padding: '2rem'
              }}>
                <div className="detail-item">
                  <span className="detail-label" style={{color: '#d69e2e', fontWeight: '600'}}>法人番号</span>
                  <span className="detail-value" style={{color: '#1a365d', fontWeight: '500'}}>1220-03-003231</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label" style={{color: '#d69e2e', fontWeight: '600'}}>会社名</span>
                  <span className="detail-value" style={{color: '#1a365d', fontWeight: '500'}}>合同会社ウォーターバレイ</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label" style={{color: '#d69e2e', fontWeight: '600'}}>代表</span>
                  <span className="detail-value" style={{color: '#1a365d', fontWeight: '500'}}>水谷　暢宏</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label" style={{color: '#d69e2e', fontWeight: '600'}}>設立</span>
                  <span className="detail-value" style={{color: '#1a365d', fontWeight: '500'}}>2025年</span>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{color: '#1a365d', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700'}}>企業理念</h3>
              <div style={{
                background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.05), rgba(49, 130, 206, 0.05))',
                padding: '2rem',
                borderRadius: '15px',
                border: '1px solid rgba(26, 54, 93, 0.1)',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{
                  color: '#1a365d', 
                  fontSize: '1.1rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem',
                  borderLeft: '4px solid #d69e2e',
                  paddingLeft: '1rem'
                }}>変革を創り、未来を拓く</h4>
                <p style={{color: '#2d3748', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem'}}>
                  私たちは、<strong style={{color: '#1a365d'}}>イノベーション</strong>と<strong style={{color: '#1a365d'}}>持続可能性</strong>を核として、
                  お客様と社会に新たな価値を創造し続けます。
                </p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, rgba(214, 158, 46, 0.05), rgba(246, 173, 85, 0.05))',
                padding: '2rem',
                borderRadius: '15px',
                border: '1px solid rgba(214, 158, 46, 0.1)'
              }}>
                <h4 style={{
                  color: '#1a365d', 
                  fontSize: '1.1rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem',
                  borderLeft: '4px solid #3182ce',
                  paddingLeft: '1rem'
                }}>多様性の力で、無限の可能性を</h4>
                <p style={{color: '#2d3748', lineHeight: '1.8', fontSize: '1rem'}}>
                  <strong style={{color: '#1a365d'}}>4つの事業分野</strong>における専門性と
                  <strong style={{color: '#1a365d'}}>多角的なアプローチ</strong>により、
                  従来の枠を超えた革新的なソリューションを提供し、
                  お客様のビジネスを次元の違う成功へと導きます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision" style={{position: 'relative', padding: '5rem 0'}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}>
          <Image
            src="/images/開発ビジネス.jpeg"
            alt="ビジネス開発のイメージ"
            fill
            style={{objectFit: 'cover'}}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.9), rgba(43, 119, 173, 0.85))'
          }} />
        </div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="mission-vision-grid">
            <div className="mission-vision-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              padding: '3rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#fbbf24', 
                fontSize: '1.8rem', 
                marginBottom: '1.5rem',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                fontWeight: '700'
              }}>ミッション</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.95)', 
                lineHeight: '1.8', 
                fontSize: '1.1rem',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}>
                デジタル技術と確かな実績により、お客様のビジネスを次のステージへと導き、
                持続可能な成長を実現します。
              </p>
            </div>
            <div className="mission-vision-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              padding: '3rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#fbbf24', 
                fontSize: '1.8rem', 
                marginBottom: '1.5rem',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                fontWeight: '700'
              }}>ビジョン</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.95)', 
                lineHeight: '1.8', 
                fontSize: '1.1rem',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}>
                未来を繋ぎ、価値を創造する企業として、
                社会に貢献し続ける存在を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" style={{background: '#f8fafc', padding: '5rem 0'}}>
        <div className="container">
          <h2 className="section-title" style={{color: '#1a365d'}}>事業の特徴</h2>
          <div className="features-grid">
            <div className="feature-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <div className="feature-icon" style={{
                background: 'linear-gradient(135deg, #1a365d, #3182ce)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 25px rgba(26, 54, 93, 0.3)'
              }}>💡</div>
              <h3 style={{color: '#1a365d', marginBottom: '1rem', fontWeight: '700'}}>革新的なソリューション</h3>
              <p style={{color: '#2d3748', lineHeight: '1.7'}}>
                最新技術を活用した革新的なソリューションで、
                お客様の課題を解決します。
              </p>
            </div>
            <div className="feature-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <div className="feature-icon" style={{
                background: 'linear-gradient(135deg, #d69e2e, #f6ad55)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 25px rgba(214, 158, 46, 0.3)'
              }}>🤝</div>
              <h3 style={{color: '#1a365d', marginBottom: '1rem', fontWeight: '700'}}>信頼のパートナーシップ</h3>
              <p style={{color: '#2d3748', lineHeight: '1.7'}}>
                長期的な信頼関係を築き、
                お客様と共に成長していきます。
              </p>
            </div>
            <div className="feature-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <div className="feature-icon" style={{
                background: 'linear-gradient(135deg, #38a169, #48bb78)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 25px rgba(56, 161, 105, 0.3)'
              }}>🌱</div>
              <h3 style={{color: '#1a365d', marginBottom: '1rem', fontWeight: '700'}}>持続可能な成長</h3>
              <p style={{color: '#2d3748', lineHeight: '1.7'}}>
                環境に配慮した事業運営により、
                持続可能な社会の実現に貢献します。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
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
            src="/images/開発ビジネス.jpeg"
            alt="事業内容のイメージ"
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
          }}>事業内容</h1>
          <p style={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            <span style={{display: 'block'}}>4つの事業分野で</span>
            <span style={{display: 'block'}}>総合的なソリューションを提供</span>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services" style={{background: '#f8fafc', padding: '5rem 0'}}>
        <div className="container">
          <h2 className="section-title" style={{color: '#1a365d'}}>私たちの事業</h2>
          <div className="services-grid">
            {/* ITソリューション事業 */}
            <div className="service-card" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '250px',
                zIndex: 1
              }}>
                <Image
                  src="/images/開発ビジネス.jpeg"
                  alt="ITソリューション事業"
                  fill
                  style={{objectFit: 'cover'}}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.4))'
                }} />
              </div>
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                paddingTop: '270px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.9))',
                marginTop: '230px',
                borderRadius: '20px 20px 0 0',
                padding: '2.5rem'
              }}>
                <h3 style={{color: '#1a365d', fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.5rem'}}>ITソリューション事業</h3>
                <p style={{color: '#2d3748', lineHeight: '1.8', marginBottom: '2rem'}}>
                  最新のデジタル技術を活用したソリューションで、お客様のビジネス効率化を支援します。
                </p>
                <div style={{marginBottom: '1.5rem'}}>
                  <h4 style={{color: '#1a365d', fontWeight: '600', marginBottom: '0.5rem'}}>主なサービス</h4>
                  <ul style={{color: '#2d3748', paddingLeft: '1rem'}}>
                    <li>インターネットを活用した情報提供サービス</li>
                    <li>デジタル通信システムの構築・運用</li>
                    <li>Webアプリケーション開発</li>
                    <li>システム統合・最適化</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* マーケティング・広告事業 */}
            <div className="service-card" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '250px',
                zIndex: 1
              }}>
                <Image
                  src="/images/リサイクルマーケティング.jpeg"
                  alt="マーケティング・広告事業"
                  fill
                  style={{objectFit: 'cover'}}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(214, 158, 46, 0.8), rgba(214, 158, 46, 0.4))'
                }} />
              </div>
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                paddingTop: '270px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.9))',
                marginTop: '230px',
                borderRadius: '20px 20px 0 0',
                padding: '2.5rem'
              }}>
                <h3 style={{color: '#1a365d', fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.5rem'}}>マーケティング・広告事業</h3>
                <p style={{color: '#2d3748', lineHeight: '1.8', marginBottom: '2rem'}}>
                  効果的な広告戦略とブランディングで、お客様のビジネス成長を加速します。
                </p>
                <div style={{marginBottom: '1.5rem'}}>
                  <h4 style={{color: '#1a365d', fontWeight: '600', marginBottom: '0.5rem'}}>主なサービス</h4>
                  <ul style={{color: '#2d3748', paddingLeft: '1rem'}}>
                    <li>デジタルマーケティング戦略立案</li>
                    <li>ブランディング・クリエイティブ制作</li>
                    <li>SNS・Web広告運用</li>
                    <li>市場調査・分析</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* リユース・リサイクル事業 */}
            <div className="service-card" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '250px',
                zIndex: 1
              }}>
                <Image
                  src="/images/リサイクル環境.jpeg"
                  alt="リユース・リサイクル事業"
                  fill
                  style={{objectFit: 'cover'}}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(56, 161, 105, 0.8), rgba(56, 161, 105, 0.4))'
                }} />
              </div>
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                paddingTop: '270px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.9))',
                marginTop: '230px',
                borderRadius: '20px 20px 0 0',
                padding: '2.5rem'
              }}>
                <h3 style={{color: '#1a365d', fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.5rem'}}>リユース・リサイクル事業</h3>
                <p style={{color: '#2d3748', lineHeight: '1.8', marginBottom: '2rem'}}>
                  持続可能な循環型ビジネスモデルで、環境に配慮した価値創造を実現します。
                </p>
                <div style={{marginBottom: '1.5rem'}}>
                  <h4 style={{color: '#1a365d', fontWeight: '600', marginBottom: '0.5rem'}}>主なサービス</h4>
                  <ul style={{color: '#2d3748', paddingLeft: '1rem'}}>
                    <li>中古品の適正査定・買取</li>
                    <li>リユース商品の販売・流通</li>
                    <li>リサイクル・アップサイクル事業</li>
                    <li>環境配慮型ビジネスコンサルティング</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 国際貿易事業 */}
            <div className="service-card" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '250px',
                zIndex: 1
              }}>
                <Image
                  src="/images/グローバル物流.jpeg"
                  alt="国際貿易事業"
                  fill
                  style={{objectFit: 'cover'}}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(102, 126, 234, 0.8), rgba(102, 126, 234, 0.4))'
                }} />
              </div>
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                paddingTop: '270px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.9))',
                marginTop: '230px',
                borderRadius: '20px 20px 0 0',
                padding: '2.5rem'
              }}>
                <h3 style={{color: '#1a365d', fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.5rem'}}>国際貿易事業</h3>
                <p style={{color: '#2d3748', lineHeight: '1.8', marginBottom: '2rem'}}>
                  グローバルなネットワークを活用し、国際的な商品流通を支援します。
                </p>
                <div style={{marginBottom: '1.5rem'}}>
                  <h4 style={{color: '#1a365d', fontWeight: '600', marginBottom: '0.5rem'}}>主なサービス</h4>
                  <ul style={{color: '#2d3748', paddingLeft: '1rem'}}>
                    <li>商品の輸出入業務</li>
                    <li>国際物流・配送サービス</li>
                    <li>海外市場開拓支援</li>
                    <li>貿易実務コンサルティング</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us" style={{position: 'relative', padding: '5rem 0'}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}>
          <Image
            src="/images/握手ビジネス.jpeg"
            alt="パートナーシップのイメージ"
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
          <h2 className="section-title" style={{
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            marginBottom: '3rem'
          }}>選ばれる理由</h2>
          <div className="features-grid">
            <div className="feature-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="feature-icon" style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)'
              }}>🎯</div>
              <h3 style={{
                color: 'white', 
                marginBottom: '1rem', 
                fontWeight: '700',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}>総合的なサポート</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.95)', 
                lineHeight: '1.7',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}>
                4つの事業分野での豊富な経験により、
                お客様のあらゆるニーズに対応します。
              </p>
            </div>
            <div className="feature-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="feature-icon" style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)'
              }}>⚡</div>
              <h3 style={{
                color: 'white', 
                marginBottom: '1rem', 
                fontWeight: '700',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}>迅速な対応</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.95)', 
                lineHeight: '1.7',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}>
                お客様のご要望に対して、
                迅速かつ的確な対応を心がけています。
              </p>
            </div>
            <div className="feature-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="feature-icon" style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)'
              }}>🔧</div>
              <h3 style={{
                color: 'white', 
                marginBottom: '1rem', 
                fontWeight: '700',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}>カスタマイズ対応</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.95)', 
                lineHeight: '1.7',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}>
                お客様の業界や規模に合わせた
                オーダーメイドソリューションを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
        padding: '3rem',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          zIndex: 1
        }}>
          <Image
            src="/images/ヒーローセクション用３.jpeg"
            alt="お問い合わせ背景"
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
        <div style={{position: 'relative', zIndex: 2}}>
          <h2 style={{color: '#1a365d', marginBottom: '1rem'}}>お気軽にご相談ください</h2>
          <p style={{marginBottom: '2rem', color: '#4a5568'}}>
            どの事業についても、お客様のニーズに合わせたカスタマイズが可能です。<br />
            まずはお気軽にお問い合わせください。
          </p>
          <Link href="/contact" className="btn-primary">
            お問い合わせはこちら
          </Link>
        </div>
      </div>
    </>
  )
} 
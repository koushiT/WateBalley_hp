'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    '/images/ヒーローセクション用１.jpeg',
    '/images/ヒーローセクション用２.jpeg',
    '/images/ヒーローセクション用３.jpeg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      )
    }, 5000) // 5秒ごとに切り替え

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{position: 'relative'}}>
        {/* スライダー画像 */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out'
            }}
          >
            <Image
              src={image}
              alt={`ビジネス成功のイメージ ${index + 1}`}
              fill
              style={{objectFit: 'cover'}}
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* 強化されたオーバーレイ */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.85), rgba(43, 119, 173, 0.75))',
          zIndex: 2
        }} />
        
        {/* テキストコンテンツ */}
        <div className="hero-content" style={{
          position: 'relative', 
          zIndex: 3,
          background: 'rgba(0, 0, 0, 0.25)',
          padding: '4rem 5rem',
          borderRadius: '25px',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          minWidth: '600px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            color: 'white'
          }}>
            <span style={{display: 'block'}}>未来を繋ぐ、</span>
            <span style={{display: 'block'}}>価値を創る</span>
          </h1>
          <p style={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            <span style={{display: 'block'}}>デジタル技術と確かな実績で、</span>
            <span style={{display: 'block'}}>お客様のビジネスを次のステージへ</span>
          </p>
          <div className="hero-buttons">
            <Link href="/services" className="btn-primary">サービスを見る</Link>
            <Link href="/contact" className="btn-secondary">お問い合わせ</Link>
          </div>
        </div>

        {/* スライダーインジケーター */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 3
        }}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid white',
                background: currentImageIndex === index ? 'white' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">私たちの事業</h2>
          <div className="services-grid">
            <div className="service-card" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '200px',
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
                  background: 'linear-gradient(to bottom, rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.3))'
                }} />
              </div>
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                paddingTop: '220px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.85))',
                marginTop: '180px',
                borderRadius: '20px 20px 0 0',
                padding: '2rem'
              }}>
                <h3 style={{color: '#1a365d', fontWeight: '700'}}>ITソリューション事業</h3>
                <p style={{color: '#2d3748', lineHeight: '1.7'}}>
                  インターネットを活用した情報提供サービス、デジタル通信システムの構築・運用
                </p>
              </div>
            </div>

            <div className="service-card" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '200px',
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
                  background: 'linear-gradient(to bottom, rgba(214, 158, 46, 0.7), rgba(214, 158, 46, 0.3))'
                }} />
              </div>
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                paddingTop: '220px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.85))',
                marginTop: '180px',
                borderRadius: '20px 20px 0 0',
                padding: '2rem'
              }}>
                <h3 style={{color: '#1a365d', fontWeight: '700'}}>マーケティング・広告事業</h3>
                <p style={{color: '#2d3748', lineHeight: '1.7'}}>
                  効果的な広告戦略の企画・実行、ブランディング支援
                </p>
              </div>
            </div>

            <div className="service-card" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '200px',
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
                  background: 'linear-gradient(to bottom, rgba(56, 161, 105, 0.7), rgba(56, 161, 105, 0.3))'
                }} />
              </div>
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                paddingTop: '220px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.85))',
                marginTop: '180px',
                borderRadius: '20px 20px 0 0',
                padding: '2rem'
              }}>
                <h3 style={{color: '#1a365d', fontWeight: '700'}}>リユース・リサイクル事業</h3>
                <p style={{color: '#2d3748', lineHeight: '1.7'}}>
                  中古品の適正な査定・販売、持続可能な循環型ビジネス
                </p>
              </div>
            </div>

            <div className="service-card" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '200px',
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
                  background: 'linear-gradient(to bottom, rgba(102, 126, 234, 0.7), rgba(102, 126, 234, 0.3))'
                }} />
              </div>
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                paddingTop: '220px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.85))',
                marginTop: '180px',
                borderRadius: '20px 20px 0 0',
                padding: '2rem'
              }}>
                <h3 style={{color: '#1a365d', fontWeight: '700'}}>国際貿易事業</h3>
                <p style={{color: '#2d3748', lineHeight: '1.7'}}>
                  商品の輸出入業務、グローバルな商品販売
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="strengths" style={{position: 'relative', background: '#f8fafc'}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          opacity: 0.05
        }}>
          <Image
            src="/images/チームワーク.jpeg"
            alt="チームワークのイメージ"
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title" style={{color: '#1a365d'}}>私たちの強み</h2>
          <div className="strengths-grid">
            <div className="strength-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}>
              <div className="strength-number" style={{color: '#d69e2e', textShadow: '0 2px 4px rgba(214, 158, 46, 0.3)'}}>01</div>
              <h3 className="strength-title" style={{color: '#1a365d', fontWeight: '700'}}>多角的事業展開</h3>
              <p style={{color: '#2d3748', lineHeight: '1.7'}}>多様な事業領域での豊富な経験により、お客様のあらゆるニーズにお応えします。</p>
            </div>
            <div className="strength-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}>
              <div className="strength-number" style={{color: '#d69e2e', textShadow: '0 2px 4px rgba(214, 158, 46, 0.3)'}}>02</div>
              <h3 className="strength-title" style={{color: '#1a365d', fontWeight: '700'}}>デジタル技術</h3>
              <p style={{color: '#2d3748', lineHeight: '1.7'}}>最新のIT技術を活用したソリューションで、効率的なビジネス運営を支援します。</p>
            </div>
            <div className="strength-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}>
              <div className="strength-number" style={{color: '#d69e2e', textShadow: '0 2px 4px rgba(214, 158, 46, 0.3)'}}>03</div>
              <h3 className="strength-title" style={{color: '#1a365d', fontWeight: '700'}}>信頼の実績</h3>
              <p style={{color: '#2d3748', lineHeight: '1.7'}}>長年にわたる安定した事業運営の実績により、確かな信頼をお届けします。</p>
            </div>
            <div className="strength-item" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}>
              <div className="strength-number" style={{color: '#d69e2e', textShadow: '0 2px 4px rgba(214, 158, 46, 0.3)'}}>04</div>
              <h3 className="strength-title" style={{color: '#1a365d', fontWeight: '700'}}>柔軟な対応</h3>
              <p style={{color: '#2d3748', lineHeight: '1.7'}}>お客様のニーズに合わせたオーダーメイドサービスで最適なソリューションを提供します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="company-info" style={{position: 'relative'}}>
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
            alt="ビジネスパートナーシップ"
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
          <div className="company-grid">
            <div>
              <h2 className="section-title" style={{
                color: 'white', 
                textAlign: 'left',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}>会社概要</h2>
              <p style={{
                fontSize: '1.1rem', 
                marginBottom: '2rem',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                color: 'rgba(255, 255, 255, 0.95)'
              }}>
                合同会社ウォーターバレイは、多角的な事業展開により、
                お客様のビジネス成長を総合的にサポートします。
              </p>
              <Link href="/about" className="btn-primary">詳細を見る</Link>
            </div>
            <div className="company-details" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="detail-item">
                <span className="detail-label" style={{color: '#fbbf24'}}>法人番号</span>
                <span className="detail-value" style={{color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>1220-03-003231</span>
              </div>
              <div className="detail-item">
                <span className="detail-label" style={{color: '#fbbf24'}}>会社名</span>
                <span className="detail-value" style={{color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>合同会社ウォーターバレイ</span>
              </div>
              <div className="detail-item">
                <span className="detail-label" style={{color: '#fbbf24'}}>代表</span>
                <span className="detail-value" style={{color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>水谷　暢宏</span>
              </div>
              <div className="detail-item">
                <span className="detail-label" style={{color: '#fbbf24'}}>事業内容</span>
                <span className="detail-value" style={{color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>
                  ITソリューション、マーケティング・広告、<br />
                  リユース・リサイクル、国際貿易
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

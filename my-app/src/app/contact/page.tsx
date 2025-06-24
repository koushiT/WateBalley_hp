import Image from 'next/image'
import React from 'react'

export default function Contact() {

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
            src="/images/握手ビジネス.jpeg"
            alt="お問い合わせのイメージ"
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
          }}>お問い合わせ</h1>
          <p style={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>お気軽にご相談ください</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info" style={{background: '#f8fafc', padding: '5rem 0'}}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{color: '#1a365d', fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '700'}}>
                お問い合わせ・ご連絡先
              </h2>
              <p style={{color: '#2d3748', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.1rem'}}>
                サービスに関するご質問、ご相談など、お気軽にお問い合わせください。
                担当者より迅速にご回答いたします。
              </p>
              
              <div className="contact-methods" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                padding: '2.5rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{color: '#1a365d', fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '700'}}>
                  連絡方法
                </h3>
                
                <div className="contact-method" style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '2rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '15px',
                  border: '1px solid rgba(26, 54, 93, 0.1)'
                }}>
                  <div className="contact-icon" style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #1a365d, #3182ce)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    color: 'white',
                    marginRight: '1.5rem',
                    flexShrink: 0,
                    fontWeight: '600'
                  }}>MAIL</div>
                  <div>
                    <h4 style={{color: '#1a365d', fontWeight: '600', marginBottom: '0.5rem'}}>メール</h4>
                    <p style={{color: '#2d3748', margin: 0, fontSize: '1.1rem'}}>
                      <a href="mailto:mizutani@water-valley.jp" style={{
                        color: '#3182ce',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}>mizutani@water-valley.jp</a>
                    </p>
                    <p style={{color: '#4a5568', margin: 0, fontSize: '0.9rem', marginTop: '0.25rem'}}>
                      営業時間内にご回答いたします
                    </p>
                  </div>
                </div>
                
                <div className="contact-method" style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '2rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '15px',
                  border: '1px solid rgba(26, 54, 93, 0.1)'
                }}>
                  <div className="contact-icon" style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #1a365d, #3182ce)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: 'white',
                    marginRight: '1.5rem',
                    flexShrink: 0,
                    fontWeight: '600'
                  }}>TEL</div>
                  <div>
                    <h4 style={{color: '#1a365d', fontWeight: '600', marginBottom: '0.5rem'}}>電話</h4>
                    <p style={{color: '#2d3748', margin: 0, fontSize: '1.1rem'}}>
                      <a href="tel:06-7777-2982" style={{
                        color: '#3182ce',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}>06-7777-2982</a>
                    </p>
                    <p style={{color: '#4a5568', margin: 0, fontSize: '0.9rem', marginTop: '0.25rem'}}>
                      平日 9:00 - 18:00
                    </p>
                  </div>
                </div>
                
                <div className="contact-method" style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '15px',
                  border: '1px solid rgba(26, 54, 93, 0.1)'
                }}>
                  <div className="contact-icon" style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #1a365d, #3182ce)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    color: 'white',
                    marginRight: '1.5rem',
                    flexShrink: 0,
                    fontWeight: '600'
                  }}>MAP</div>
                  <div>
                    <h4 style={{color: '#1a365d', fontWeight: '600', marginBottom: '0.5rem'}}>所在地</h4>
                    <p style={{color: '#2d3748', margin: 0, fontSize: '1.1rem'}}>
                      〒577-0056<br />
                      大阪府東大阪市長堂3-16-22-401
                    </p>
                    <p style={{color: '#4a5568', margin: 0, fontSize: '0.9rem', marginTop: '0.25rem'}}>
                      最寄り駅：近鉄布施駅 徒歩約10分
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{color: '#1a365d', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700'}}>
                会社情報
              </h3>
              <div className="company-info-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <div className="detail-item" style={{marginBottom: '1rem'}}>
                  <span className="detail-label" style={{color: '#d69e2e', fontWeight: '600'}}>会社名</span>
                  <span className="detail-value" style={{color: '#1a365d', fontWeight: '500'}}>合同会社ウォーターバレイ</span>
                </div>
                <div className="detail-item" style={{marginBottom: '1rem'}}>
                  <span className="detail-label" style={{color: '#d69e2e', fontWeight: '600'}}>代表</span>
                  <span className="detail-value" style={{color: '#1a365d', fontWeight: '500'}}>水谷　暢宏</span>
                </div>
                <div className="detail-item" style={{marginBottom: '1rem'}}>
                  <span className="detail-label" style={{color: '#d69e2e', fontWeight: '600'}}>法人番号</span>
                  <span className="detail-value" style={{color: '#1a365d', fontWeight: '500'}}>1220-03-003231</span>
                </div>
                <div className="detail-item" style={{marginBottom: '1rem'}}>
                  <span className="detail-label" style={{color: '#d69e2e', fontWeight: '600'}}>設立</span>
                  <span className="detail-value" style={{color: '#1a365d', fontWeight: '500'}}>2025年</span>
                </div>
              </div>

              <h3 style={{color: '#1a365d', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700'}}>
                対応時間
              </h3>
              <div className="business-hours" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                padding: '2rem'
              }}>
                <p style={{color: '#2d3748', lineHeight: '1.8', marginBottom: '1rem'}}>
                  <strong style={{color: '#1a365d'}}>営業時間：</strong>平日 9:00 - 18:00
                </p>
                <p style={{color: '#2d3748', lineHeight: '1.8', marginBottom: '1rem'}}>
                  <strong style={{color: '#1a365d'}}>定休日：</strong>土日祝日
                </p>
                <p style={{color: '#2d3748', lineHeight: '1.8', fontSize: '0.9rem'}}>
                  ※メール・電話でのお問い合わせを受け付けております。<br />
                  ※営業時間外のお問い合わせについては、翌営業日以降にご回答いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" style={{position: 'relative', padding: '5rem 0'}}>
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
        <div className="container" style={{position: 'relative', zIndex: 2, textAlign: 'center'}}>
          <h2 style={{
            color: 'white',
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontWeight: '700'
          }}>
            お客様のビジネスを次のステージへ
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '1.2rem',
            marginBottom: '2rem',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            lineHeight: '1.7'
          }}>
            合同会社ウォーターバレイは、デジタル技術と確かな実績で、<br />
            お客様のビジネス成長を総合的にサポートします。
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="mailto:mizutani@water-valley.jp" className="btn-primary" style={{fontSize: '1.1rem', padding: '1rem 2rem'}}>
              メールでお問い合わせ
            </a>
            <a href="/services" className="btn-secondary" style={{fontSize: '1.1rem', padding: '1rem 2rem'}}>
              サービス詳細
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 
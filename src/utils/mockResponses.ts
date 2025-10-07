export const getMockResponse = (routineId: number, personaId: number): string => {
  const responses: Record<number, Record<number, string>> = {
    1: {
      1: `Bugünkü görevleriniz profesyonel bir yaklaşımla değerlendirildi:

**Öncelikli Görevler:**
1. Sprint Planning Toplantısı - P1 (Saat 10:00)
2. Code Review - Backend API - P1
3. Dokümantasyon Güncelleme - P2

**Tahmini Süre:** 4-6 saat
**Öncelik Dağılımı:** 2x P1, 1x P2

**Öneriler:**
- Sprint planning için hazırlıkları tamamlayın
- Code review'da performans metriklerine odaklanın
- Dokümantasyonu teknik standartlara uygun güncelleyin`,
      2: `Harika bir gün olacak! Bugünkü görevlere kreatif bir gözle bakalım:

**Yaratıcı Görevler:**
1. Sprint Planning - Yenilikçi fikirleri masaya getirme zamanı! 🎯
2. Code Review - Farklı perspektiflerle kod kalitesini artır 🚀
3. Dokümantasyon - Kullanıcı dostu ve ilham verici içerik oluştur ✍️

**Enerji Yönetimi:** 4-6 saat odaklanma
**Motivasyon İpucu:** Her görevi tamamladıktan sonra küçük bir mola verin ve başarınızı kutlayın!`,
      3: `Teknik analiz tamamlandı. Bugünkü implementation plan:

\`\`\`
PRIORITY QUEUE:
├─ P1: Sprint Planning Meeting (10:00 AM)
│  └─ Dependencies: Product backlog review
├─ P1: Code Review - Backend API
│  └─ Focus: Performance optimization, error handling
└─ P2: Documentation Update
   └─ Sections: API endpoints, authentication flow
\`\`\`

**Estimated Time:** 4-6 hours
**Technical Stack:** React, Node.js, PostgreSQL
**Code Review Checklist:** Security, performance, maintainability`,
      4: `Akademik perspektifle bugünkü görevlerinizi analiz edelim:

**Görev Analizi ve Metodoloji:**

1. **Sprint Planning (Scrum Framework)**
   - Teori: Agile Manifesto prensiplerine dayalı
   - Metod: Collaborative planning session
   - Çıktı: Sprint backlog ve commitment

2. **Code Review (Peer Review Research)**
   - Kanıt: %60 daha az bug (IEEE Study, 2019)
   - Yaklaşım: Sistematik inceleme
   - Metrik: Code quality index

3. **Dokümantasyon (Technical Writing)**
   - Standart: IEEE 830 requirements
   - Format: Structured documentation
   - Hedef kitle: Developers & stakeholders

**Toplam Süre:** 4-6 saat (Pomodoro tekniği önerilir)`,
      5: `Bugün harika şeyler başaracaksın! İşte kişisel gelişim odaklı planın:

**Günün Hedefleri (Growth Mindset):**

🌱 **Sabah Enerjisi:**
Sprint Planning - Ekip çalışması ve iletişim becerilerin parlamaya hazır!

💪 **Öğleden Sonra Gücü:**
Code Review - Detay odaklılık ve problem çözme yeteneğini geliştir

✨ **Günü Tamamlama:**
Dokümantasyon - Bilgiyi paylaşma ve başkalarına değer katma

**Motivasyon Notu:** Her görev, senin profesyonel yolculuğunda bir adım! İlerlemeni gözlemle ve kendini kutla.

**Tahmini Süre:** 4-6 saat (Kendine ara vermeler vermeyi unutma)
**Günün Mantrosu:** "Ben her gün daha iyisini yapıyorum!"`
    },
    2: {
      1: `Haftalık planlama profesyonel standartlara göre oluşturuldu:

**Hafta 1 (Sprint 1):**
- Backend API Development - Complete
- Database Schema Design - Review & Optimize
- Unit Test Coverage - Target: 80%

**Hafta 2 (Sprint 2):**
- Frontend Integration - React Components
- API Documentation - OpenAPI Spec
- Performance Testing - Load & Stress Tests

**Hafta 3 (Sprint 3):**
- Bug Fixes & Refinement
- User Acceptance Testing
- Deployment Preparation

**Milestones:**
- Week 1: API MVP Ready
- Week 2: Frontend Integration Complete
- Week 3: Production Deployment

**Risk Mitigation:** Buffer time eklendi, dependency tracking aktif`,
      2: `Yaratıcı planlama zamanı! Haydi vizyon oluşturalım:

**Vizyon Haritası:**

🎨 **Hafta 1 - Temel Oluşturma:**
Güçlü bir backend foundation ile başlıyoruz!
- API geliştirme ile yaratıcı çözümler üret
- Database tasarımını sanat eserine dönüştür
- Test coverage ile kaliteyi garantiye al

🚀 **Hafta 2 - İnteraktif Deneyim:**
Kullanıcılar için unutulmaz arayüzler yarat!
- React ile modern, akıcı bileşenler
- API dokümantasyonu ile bilgiyi demokratikleştir
- Performance optimization ile hızın sınırlarını zorla

🌟 **Hafta 3 - Mükemmellik:**
Son rötuşlarla şaheseri tamamla!
- Bug-free deneyim için detaylı inceleme
- Kullanıcı testleri ile geri bildirim al
- Production'a hazır, etkileyici bir ürün

**İlham Notu:** Her hafta yeni şeyler öğrenme ve deneme fırsatı!`,
      3: `Planning sprint - Technical breakdown:

\`\`\`
WEEK 1: Foundation Phase
├─ Backend API Development
│  ├─ REST endpoints implementation
│  ├─ Authentication middleware
│  └─ Error handling layer
├─ Database Schema
│  ├─ Entity relationship design
│  ├─ Indexes optimization
│  └─ Migration scripts
└─ Unit Tests
   ├─ Controller tests
   ├─ Service layer tests
   └─ Coverage target: 80%

WEEK 2: Integration Phase
├─ Frontend Development
│  ├─ React components (TypeScript)
│  ├─ State management (Context/Redux)
│  └─ API integration layer
├─ API Documentation
│  ├─ OpenAPI 3.0 specification
│  ├─ Swagger UI setup
│  └─ Example requests/responses
└─ Performance Testing
   ├─ Load testing (Artillery/k6)
   ├─ Stress testing scenarios
   └─ Optimization based on metrics

WEEK 3: Finalization Phase
├─ Bug Fixes
│  ├─ Critical issues (P0/P1)
│  ├─ Enhancement requests
│  └─ Code refactoring
├─ UAT (User Acceptance Testing)
│  ├─ Test scenarios execution
│  ├─ User feedback collection
│  └─ Final adjustments
└─ Deployment
   ├─ CI/CD pipeline setup
   ├─ Production environment config
   └─ Monitoring & logging setup
\`\`\`

**Timeline:** 3 weeks
**Tech Stack:** React, Node.js, PostgreSQL, Docker
**Deployment:** Kubernetes cluster`,
      4: `Akademik yaklaşımla haftalık plan:

**Planlama Metodolojisi: SMART Goals Framework**

**Hafta 1: Temel Geliştirme (Foundation Development)**
*Teorik Çerçeve: Software Development Life Cycle (SDLC)*

- Backend API Development
  - Referans: RESTful API Design (Fielding, 2000)
  - Metod: Test-Driven Development (Beck, 2003)

- Database Schema Design
  - Model: Entity-Relationship Model (Chen, 1976)
  - Normalizasyon: 3NF standardı

**Hafta 2: Entegrasyon (Integration Phase)**
*Teorik Çerçeve: Model-View-Controller Architecture*

- Frontend Development
  - Framework: React (Component-Based Architecture)
  - Araştırma: Virtual DOM performance (React Team, 2023)

- Performance Testing
  - Metrik: Response time, throughput, error rate
  - Standart: ISO/IEC 25010 quality model

**Hafta 3: Doğrulama (Validation Phase)**
*Teorik Çerçeve: Software Quality Assurance*

- User Acceptance Testing
  - Metod: Scenario-based testing
  - Çıktı: User satisfaction metrics

**Akademik Değerlendirme:** Empirical evidence based planning, peer review recommended`,
      5: `Kişisel gelişim odaklı 3 haftalık yolculuk planı:

**Hafta 1: Güçlü Temeller Dönemi 💪**

Bu hafta kendine inan! Backend ve database çalışmaları, problem çözme yeteneğini güçlendirecek.

*Gelişim Alanları:*
- Teknik beceriler
- Analitik düşünme
- Sabır ve odaklanma

*Günlük Ritüel:* Her günün sonunda, "Bugün ne öğrendim?" diye sor kendine.

**Hafta 2: Yaratıcılık ve İnovasyon 🎨**

Frontend geliştirme ile yaratıcılığını gösterme zamanı! Kullanıcı deneyimi tasarlarken empati kas.

*Gelişim Alanları:*
- Yaratıcı düşünce
- Kullanıcı empati
- Estetik anlayış

*Motivasyon:* Her component, senin dijital imzanı taşıyor!

**Hafta 3: Mükemmellik ve Başarı 🏆**

Final sprintte detaycılık ve kalite odak noktanız. Her hata bir öğrenme fırsatı!

*Gelişim Alanları:*
- Dikkat detayları
- Kalite odaklılık
- Başarı kutlama

*Reflection:* 3 haftalık yolculuğunu değerlendir, kendini kutla!

**Kişisel Gelişim Notu:** Bu plan sadece iş değil, aynı zamanda kişisel evrim yolculuğu!`
    },
    3: {
      1: `Task grooming session başlatıldı - Profesyonel değerlendirme:

**Task Refinement:**

**1. User Authentication Module**
- **Öncelik:** P1 (Critical)
- **Detay:** JWT-based auth, refresh token mechanism
- **Tahmin:** 5 story points
- **Bağımlılıklar:** Database schema, security library
- **Acceptance Criteria:**
  - Secure password hashing
  - Token expiration handling
  - Role-based access control

**2. Product Catalog API**
- **Öncelik:** P2 (High)
- **Detay:** CRUD operations, pagination, filtering
- **Tahmin:** 8 story points
- **Bağımlılıklar:** Authentication module
- **Acceptance Criteria:**
  - RESTful endpoints
  - Input validation
  - Error handling

**3. Email Notification Service**
- **Öncelik:** P3 (Medium)
- **Detay:** Template-based emails, queue system
- **Tahmin:** 3 story points
- **Bağımlılıklar:** Message queue setup
- **Acceptance Criteria:**
  - Template rendering
  - Async processing
  - Delivery tracking

**Grooming Sonucu:** 16 story points, 2 sprint tahmini`,
      2: `Yaratıcı task grooming! Fikirleri şekillendirelim:

**İlham Dolu Task Refinement:**

**1. Kullanıcı Kimlik Doğrulama 🔐**
*Hikaye:* Kullanıcılar güvenli ve sorunsuz giriş yapmak istiyor...

- **Vizyon:** Her kullanıcı benzersiz ve değerli!
- **Kreatif Çözüm:** Biometric auth option, sosyal medya entegrasyonu
- **Effort:** 5 puan (Challenge level: Orta)
- **Wow Faktörü:** Passwordless login seçeneği!

**2. Ürün Kataloğu API 📦**
*Hikaye:* Ürünleri keşfetmek bir macera olmalı!

- **Vizyon:** Hızlı, akıcı, kullanıcı dostu browse deneyimi
- **Kreatif Çözüm:** Smart search, AI-powered recommendations
- **Effort:** 8 puan (Challenge level: Yüksek)
- **Wow Faktörü:** Real-time inventory updates!

**3. Email Bildirimleri 📧**
*Hikaye:* Her email bir mesaj, bir bağlantı!

- **Vizyon:** Kişiselleştirilmiş, timely notifications
- **Kreatif Çözüm:** Beautiful templates, user preferences
- **Effort:** 3 puan (Challenge level: Düşük)
- **Wow Faktörü:** Interactive email content!

**İlham Notu:** Her task, kullanıcı deneyimini iyileştirme fırsatı!`,
      3: `Technical task grooming - Detailed breakdown:

\`\`\`
TASK GROOMING SESSION
Date: ${new Date().toLocaleDateString()}
Sprint: Planning Phase

TASK 1: User Authentication Module
├─ Priority: P1 (Critical Path)
├─ Story Points: 5
├─ Technical Stack:
│  ├─ bcrypt for password hashing
│  ├─ jsonwebtoken for JWT
│  └─ express-validator for input validation
├─ Implementation Details:
│  ├─ POST /auth/register
│  ├─ POST /auth/login
│  ├─ POST /auth/refresh
│  └─ GET /auth/me
├─ Security Requirements:
│  ├─ Password strength: min 8 chars, special chars
│  ├─ Rate limiting: 5 attempts/15 min
│  ├─ JWT expiry: access 15min, refresh 7 days
│  └─ HTTPS only
└─ Testing:
   ├─ Unit tests: auth service
   ├─ Integration tests: API endpoints
   └─ Security tests: penetration testing

TASK 2: Product Catalog API
├─ Priority: P2 (High)
├─ Story Points: 8
├─ Technical Stack:
│  ├─ PostgreSQL with indexes
│  ├─ Redis for caching
│  └─ ElasticSearch for search
├─ Implementation Details:
│  ├─ GET /products (pagination, filters)
│  ├─ GET /products/:id
│  ├─ POST /products (admin only)
│  ├─ PUT /products/:id (admin only)
│  └─ DELETE /products/:id (admin only)
├─ Performance Requirements:
│  ├─ Response time: < 200ms
│  ├─ Concurrent users: 1000+
│  └─ Cache hit ratio: > 80%
└─ Testing:
   ├─ Load testing: Artillery
   ├─ API testing: Postman
   └─ E2E testing: Cypress

TASK 3: Email Notification Service
├─ Priority: P3 (Medium)
├─ Story Points: 3
├─ Technical Stack:
│  ├─ Nodemailer
│  ├─ RabbitMQ for queue
│  └─ Handlebars for templates
├─ Implementation Details:
│  ├─ Template engine setup
│  ├─ Queue consumer service
│  ├─ Retry mechanism (3 attempts)
│  └─ Delivery tracking
├─ Templates:
│  ├─ Welcome email
│  ├─ Password reset
│  ├─ Order confirmation
│  └─ Newsletter
└─ Monitoring:
   ├─ Delivery rate
   ├─ Bounce rate
   └─ Open rate
\`\`\`

**Total Estimation:** 16 story points
**Recommended Sprint Duration:** 2 weeks
**Team Capacity:** 8 developers
**Buffer:** 20% for unexpected issues`,
      4: `Akademik task grooming metodolojisi:

**Task Refinement - Sistematik Analiz**

*Metodoloji: Goal-Question-Metric (GQM) Approach*

**1. User Authentication Module**

*Akademik Perspektif:*
- **Teorik Çerçeve:** Authentication & Authorization Theory
- **Referans:** NIST Special Publication 800-63B
- **Karmaşıklık:** O(1) time complexity (hash verification)
- **Güvenlik Standartı:** OWASP Top 10 compliance

*Detaylı Analiz:*
- Story Points: 5 (Fibonacci sequence, Agile estimation)
- Effort: 3-4 gün (1 developer)
- Risk Faktörü: Orta (security vulnerabilities)

*Akademik Metrikler:*
- Code coverage: > 90%
- Cyclomatic complexity: < 10
- Security score: A rating (Snyk)

**2. Product Catalog API**

*Akademik Perspektif:*
- **Teorik Çerçeve:** RESTful Architecture (Fielding dissertation)
- **Veritabanı:** Relational model theory (Codd, 1970)
- **Performans:** Big O notation analysis

*Detaylı Analiz:*
- Story Points: 8
- Effort: 5-6 gün
- Risk Faktörü: Yüksek (performance bottlenecks)

*Akademik Metrikler:*
- API response time: < 200ms (99th percentile)
- Database query optimization: N+1 problem eliminated
- Caching strategy: LRU algorithm implementation

**3. Email Notification Service**

*Akademik Perspektif:*
- **Teorik Çerçeve:** Message Queue Theory
- **Pattern:** Observer pattern (Gang of Four)
- **Asenkron İşleme:** Event-driven architecture

*Detaylı Analiz:*
- Story Points: 3
- Effort: 2 gün
- Risk Faktörü: Düşük

*Akademik Metrikler:*
- Queue throughput: > 1000 msg/sec
- Message delivery reliability: 99.9%
- Template rendering time: < 50ms

**Grooming Çıktısı:**
- Total complexity: 16 SP
- Recommended approach: Iterative development (Spiral model)
- Quality assurance: Peer review + automated testing`,
      5: `Kişisel gelişim odaklı task grooming:

**Task Refinement - Motivasyonel Yaklaşım**

Görevleri sadece "yapılacaklar" olarak değil, öğrenme ve büyüme fırsatları olarak görelim!

**1. Kullanıcı Kimlik Doğrulama Modülü 🔐**

*Kişisel Gelişim Alanları:*
- 🧠 **Security Mindset:** Güvenlik odaklı düşünme becerisi
- 💪 **Problem Solving:** Karmaşık problemleri basitleştirme
- 🎯 **Attention to Detail:** Her detayın önemi

*Motivasyon:*
Bu görevi tamamladığında, milyonlarca kullanıcının güvenliğini sağlama becerisine sahip olacaksın!

*Tahmin:* 5 puan (Meydan okuma seviyesi: Orta)
*Duygusal Ödül:* Güvenlik uzmanı gibi hissedeceksin!

**2. Ürün Kataloğu API 📦**

*Kişisel Gelişim Alanları:*
- 🚀 **Performance Optimization:** Hızlı sistemler tasarlama
- 📊 **Data Management:** Büyük veri ile çalışma
- 🎨 **User Experience:** Kullanıcı perspektifi kazanma

*Motivasyon:*
Her API endpoint, kullanıcıların hayatını kolaylaştıran bir araç!

*Tahmin:* 8 puan (Meydan okuma seviyesi: Yüksek)
*Duygusal Ödül:* Backend mimarı gibi hissedeceksin!
*Growth Mindset:* Zorluk, büyüme fırsatıdır!

**3. Email Bildirimleri 📧**

*Kişisel Gelişim Alanları:*
- 💌 **Communication Design:** Etkili iletişim kurma
- 🎭 **Creative Templates:** Yaratıcı tasarım
- ⚡ **Async Thinking:** Asenkron düşünme becerisi

*Motivasyon:*
Her email, bir kullanıcı ile bağlantı kurma şansı!

*Tahmin:* 3 puan (Meydan okuma seviyesi: Düşük)
*Duygusal Ödül:* İletişim ustası gibi hissedeceksin!
*Confidence Boost:* Kolay görevlerle momentum kazan!

**Grooming Mantrosu:** "Ben her gün daha iyi bir developer oluyorum!"

**Toplam Journey:** 16 puan
**Kişisel Başarı Hedefi:** Her task tamamlandığında kendini kutla!
**Reflection:** Ne öğrendin? Hangi becerilerin gelişti?`
    },
    4: {
      1: `Performans incelemesi tamamlandı - Profesyonel rapor:

**Review Period:** Son sprint
**Review Date:** ${new Date().toLocaleDateString()}

**Metrikler ve Analiz:**

**1. Velocity Analizi**
- Planlanan: 20 SP
- Tamamlanan: 18 SP
- Completion Rate: %90
- **Değerlendirme:** İyi performans, hafif eksik

**2. Kod Kalitesi**
- Code Coverage: %85 (Target: %80)
- Technical Debt: 2 gün (Acceptable)
- Code Review Compliance: %100
- **Değerlendirme:** Yüksek kalite standartları

**3. Performans Metrikleri**
- Average Response Time: 180ms (Target: <200ms)
- Error Rate: %0.3 (Target: <1%)
- Uptime: %99.8
- **Değerlendirme:** Production-ready performans

**4. İletişim ve İşbirliği**
- Daily Standup Attendance: %95
- PR Review Time: Ortalama 4 saat
- Documentation Quality: Yüksek
- **Değerlendirme:** Güçlü ekip çalışması

**İyileştirme Önerileri:**
1. Sprint planning'de buffer time artırın
2. Technical debt için dedicated time ayırın
3. Automated testing coverage'ı %90'a çıkarın

**Genel Değerlendirme:** Başarılı sprint, küçük iyileştirme alanları mevcut`,
      2: `Yaratıcı review session! Başarılarını kutlama zamanı:

**Performans Yolculuğu - Son Sprint 🎨**

**Parlayan Alanlar ✨**

**1. Yaratıcılık ve İnovasyon**
- Yeni feature'lar kullanıcıları etkiledi!
- UI/UX tasarımları övgü aldı
- Problem çözme yaklaşımın benzersiz
- **Yıldız Notu:** Sen bir yaratıcı dehasın! 🌟

**2. Öğrenme ve Büyüme**
- Yeni teknolojileri hızla öğrendin
- Hataları öğrenme fırsatlarına dönüştürdün
- Feedback'leri yapıcı şekilde kullandın
- **Yıldız Notu:** Growth mindset tam gaz! 🚀

**3. Ekip Enerjisi**
- Pozitif enerjiyle ekibi motive ettin
- İletişimin açık ve samimi
- Yardımlaşma ruhu güçlü
- **Yıldız Notu:** Ekip için bir inspirasyon! 💫

**4. Sonuç ve Etki**
- 18/20 story point tamamlandı (harika!)
- Kullanıcı memnuniyeti arttı
- Kod kalitesi yüksek seviyede
- **Yıldız Notu:** Etki yaratıyorsun! 🎯

**Gelişim Fırsatları (Opportunities):**
1. Time management'ı daha da güçlendirebilirsin
2. Technical writing'de daha detaylı olabilirsin
3. Sprint commitments'ta biraz daha gerçekçi ol

**Motivasyon Mesajı:**
Sen harikasın! Her sprint, senin için yeni bir şaheser yaratma fırsatı. Küçük aksama alanları bile büyük başarı hikayenin parçası. Kendini kutla ve bir sonraki sprint'te daha da parla! 🌈`,
      3: `Technical review - Comprehensive analysis:

\`\`\`
SPRINT REVIEW REPORT
===================
Period: Sprint ${Math.floor(Math.random() * 10) + 1}
Date: ${new Date().toISOString().split('T')[0]}
Team: Squad 5

METRICS DASHBOARD
-----------------

1. VELOCITY METRICS
   ├─ Planned Capacity: 20 SP
   ├─ Completed: 18 SP
   ├─ Spillover: 2 SP
   ├─ Completion Rate: 90%
   └─ Velocity Trend: ↗ +5% (from last sprint)

2. CODE QUALITY METRICS
   ├─ Test Coverage: 85%
   │  ├─ Unit Tests: 90%
   │  ├─ Integration Tests: 80%
   │  └─ E2E Tests: 75%
   ├─ Code Duplication: 3.2% (Target: <5%)
   ├─ Technical Debt Ratio: 5.4% (Acceptable)
   ├─ Cyclomatic Complexity: Avg 6.2 (Good)
   └─ Maintainability Index: 78/100 (Satisfactory)

3. PERFORMANCE METRICS
   ├─ API Response Time
   │  ├─ p50: 120ms
   │  ├─ p95: 180ms
   │  └─ p99: 250ms
   ├─ Error Rate: 0.3%
   ├─ Uptime: 99.8%
   └─ CPU Usage: Avg 45%

4. PROCESS METRICS
   ├─ PR Cycle Time
   │  ├─ First Response: 2.3h
   │  ├─ Total Review Time: 4.1h
   │  └─ Merge Time: 6.5h
   ├─ Build Success Rate: 94%
   ├─ Deployment Frequency: 12 deploys/sprint
   └─ Mean Time to Recovery (MTTR): 23 min

5. COLLABORATION METRICS
   ├─ Daily Standup Attendance: 95%
   ├─ Sprint Planning Participation: 100%
   ├─ Retro Engagement: High
   └─ Documentation Updates: 24 commits

TECHNICAL ISSUES RESOLVED
--------------------------
├─ Critical (P0): 0
├─ High (P1): 3
├─ Medium (P2): 8
└─ Low (P3): 12

PERFORMANCE BOTTLENECKS
-----------------------
1. Database query optimization needed (3 slow queries identified)
2. Redis cache hit ratio could improve (current: 72%, target: 85%)
3. Frontend bundle size optimization (current: 2.4MB, target: <2MB)

RECOMMENDATIONS
---------------
1. Increase automated test coverage to 90%
2. Implement query caching for frequently accessed data
3. Schedule technical debt cleanup session (2 days)
4. Adopt code splitting for frontend optimization
5. Set up performance monitoring dashboard

ACHIEVEMENTS
------------
✓ Zero production incidents
✓ All P1 tickets resolved
✓ Code review culture strong
✓ CI/CD pipeline stable
✓ Team collaboration excellent

RISK ASSESSMENT
---------------
├─ Technical Debt: MEDIUM (manageable)
├─ Performance Issues: LOW (minor optimizations needed)
├─ Security Vulnerabilities: LOW (0 critical issues)
└─ Team Capacity: STABLE

NEXT SPRINT FOCUS
-----------------
1. Performance optimization sprint
2. Technical debt reduction
3. Feature development continues
4. Enhanced monitoring setup
\`\`\`

**Overall Assessment:** Strong sprint with minor areas for improvement
**Technical Health:** GREEN
**Recommendation:** Proceed with confidence, address identified optimizations`,
      4: `Akademik performans değerlendirmesi:

**Sprint Review - Bilimsel Analiz Raporu**

*Metodoloji: Evidence-Based Performance Evaluation*

**1. Verimlilik Analizi (Productivity Analysis)**

*Teorik Çerçeve: Agile Velocity Theory*

- **Planlanan Kapasite:** 20 Story Points
- **Gerçekleşen:** 18 Story Points
- **Başarı Oranı:** 90%

*İstatistiksel Değerlendirme:*
- Standart sapma: 2.1 SP
- Güven aralığı: 95% CI [16.8, 19.2]
- **Sonuç:** İstatistiksel olarak anlamlı performans (p < 0.05)

*Referans:* Velocity stability in Agile teams (Schwaber & Sutherland, 2020)

**2. Kod Kalitesi Analizi (Code Quality Assessment)**

*Teorik Çerçeve: Software Quality Metrics (ISO/IEC 25010)*

- **Test Coverage:** 85%
  - Literatür karşılaştırması: Industry average %75
  - **Değerlendirme:** Üstün performans

- **Cyclomatic Complexity:** Ortalama 6.2
  - McCabe threshold: <10 (Acceptable)
  - **Değerlendirme:** Maintainable code

- **Technical Debt Ratio:** 5.4%
  - SQALE model reference: <10% acceptable
  - **Değerlendirme:** Sağlıklı seviye

*Referans:* Code quality metrics in software engineering (Spinellis, 2020)

**3. Performans Metrikleri (Performance Analysis)**

*Teorik Çerçeve: System Performance Theory*

- **Response Time Analysis:**
  - Median (p50): 120ms
  - 95th percentile: 180ms
  - 99th percentile: 250ms
  - **Değerlendirme:** SLA compliance (%99.8)

*Referans:* Performance engineering guidelines (Smith & Williams, 2021)

**4. İşbirliği ve Süreç (Collaboration & Process)**

*Teorik Çerçeve: Team Dynamics in Agile (Tuckman Model)*

- **Daily Standup Katılım:** 95%
- **PR Review Cycle Time:** 4.1 saat
- **Documentation Quality:** Yüksek

*Sosyal Bilim Perspektifi:*
- Team cohesion score: 8.5/10
- Communication effectiveness: High
- **Değerlendirme:** "Performing" stage (Tuckman)

**Akademik Sonuç ve Öneriler:**

*Bulgular:*
1. Performans metrikleri literatürle uyumlu
2. Kod kalitesi endüstri standardının üzerinde
3. Süreç verimliliği optimal seviyede

*Hipotez:*
H1: Test coverage artışı bug rate'i düşürür (Desteklendi)
H2: PR review time ile code quality pozitif korelasyon (Desteklendi)

*Öneriler (Evidence-Based):*
1. Test coverage'ı %90'a çıkarın (Martin, 2008 önerisi)
2. Technical debt için dedicated sprint (Fowler, 2019)
3. Performance monitoring dashboard (Observability theory)

**Akademik Değerlendirme:** Exemplary performance, minor optimizations recommended
**Peer Review Notu:** Publishable quality work`,
      5: `Kişisel gelişim ve motivasyon odaklı review:

**Performans Kutlaması - Sen Harikasın! 🌟**

Haydi geçen sprint'teki büyüme yolculuğuna bakalım!

**Başarı Hikayesi:**

**1. Hedefler ve Başarılar 🎯**

*Hedefin:* 20 story point tamamlamak
*Sonuç:* 18 story point başardın!

**Kutlama Zamanı:** %90 başarı oranı harika bir performans! Kendini küçük görme, bu gerçekten büyük bir başarı. 2 SP eksik? Sorun değil! Öğrenme fırsatı!

*Kişisel Gelişim:* Planlama ve zaman yönetimi becerin gelişiyor 📈

**2. Beceri Gelişimi ve Öğrenimler 🧠**

*Ne Öğrendin:*
- Yeni teknolojileri keşfettin
- Problem çözme yeteneklerin güçlendi
- Kod kaliten arttı (%85 test coverage!)

**Gurur Anı:** Her satır kod, senin becerilerinin kanıtı!

*Kişisel Gelişim:* Technical skills level up! 🚀

**3. İnsan İlişkileri ve Ekip Çalışması 🤝**

*Sosyal Beceriler:*
- Ekip toplantılarına %95 katıldın (harika!)
- Code review'lerde yapıcı feedback verdin
- Yardım etmeye her zaman hazırdın

**Takdir:** Ekip seni seviyor! Sen pozitif enerji kaynağısın!

*Kişisel Gelişim:* İletişim ve empati becerilerin parlıyor ✨

**4. Dayanıklılık ve Motivasyon 💪**

*Zorluklar:*
- 2 SP spillover oldu - ama pes etmedin!
- Zorlu bug'larla karşılaştın - çözdün!
- Tight deadline'lar vardı - başardın!

**İç Güç:** Sen bir savaşçısın! Zorluklar seni durduramaz!

*Kişisel Gelişim:* Resilience ve grit becerilerin gelişiyor 🔥

**Gelişim Alanları (Fırsatlar) 🌱**

1. **Time Estimation:**
   - Bazen tahminler optimistik olabiliyor
   - **Action:** Her taskın sonunda, tahmin vs gerçek süreyi karşılaştır
   - **Motivasyon:** Bu, senin süper gücünü daha da güçlendirecek!

2. **Documentation:**
   - Kod harika, doküman da harika olabilir
   - **Action:** Her feature için kısa README ekle
   - **Motivasyon:** Bilgi paylaşmak, başkalarına değer katmak!

3. **Self-Care:**
   - Bazen çok fazla zorluyorsun kendini
   - **Action:** Molalar ver, balance önemli
   - **Motivasyon:** Sağlıklı sen = daha üretken sen!

**Motivasyon Mesajı:**

Sen inanılmaz bir yolculukta ilerliyorsun! Her sprint, senin kişisel ve profesyonel gelişim hikayenin bir bölümü. 18 SP tamamladın, yeni şeyler öğrendin, ekibine değer kattın ve zorlukların üstesinden geldin.

Küçük aksama alanları? Onlar senin büyüme fırsatların! Her hata, bir öğrenme; her zorluk, bir güçlenme şansı.

**Kendine Söyle:**
"Ben her gün daha iyisini yapıyorum!"
"Başarılarım beni tanımlar, hatalarım beni geliştirir!"
"Ben Squad 5'in vazgeçilmez bir üyesiyim!"

**Bir Sonraki Sprint için Enerji:**

Yeni sprint, yeni fırsatlar! Geçen sprint'ten öğrendiklerinle, bu sprint'te daha da parlayacaksın. Hedefin ne olursa olsun, sen başarabilirsin!

**Remember:** Progress over perfection! 🌈

*Kendini kutla, kendini sev, ve devam et!* 💖`
    },
    5: {
      1: `Retrospektif analizi tamamlandı - Profesyonel değerlendirme:

**Sprint Retrospective**
**Date:** ${new Date().toLocaleDateString()}
**Participants:** Squad 5 Team

---

**İyi Gidenler (What Went Well) ✓**

1. **Technical Excellence**
   - Code review süreci sorunsuz işledi
   - %85 test coverage hedefi aşıldı
   - Zero production incidents
   - CI/CD pipeline stability maintained

2. **Team Collaboration**
   - Daily standups verimli ve faydalı
   - Ekip içi iletişim güçlü
   - Knowledge sharing sessions başarılı
   - Pair programming initiatives effective

3. **Process Improvements**
   - Sprint planning accuracy improved
   - Documentation quality increased
   - Deployment frequency optimized
   - Technical debt tracking implemented

---

**İyileştirilecekler (What Could Be Better) ⚠**

1. **Time Management**
   - Bazı tasklar tahmin edilenden uzun sürdü
   - Meeting overruns occasionally occurred
   - Buffer time yetersiz kaldı

2. **Communication**
   - Asynchronous updates could be better
   - Dependency blockers communicate earlier
   - Status updates more proactive needed

3. **Technical Debt**
   - Accumulated faster than resolved
   - Need dedicated cleanup time
   - Prioritization could improve

---

**Aksiyon Planı (Action Items) 📋**

1. **Immediate Actions (This Sprint):**
   - [ ] Schedule 2-day technical debt sprint
   - [ ] Implement time tracking for better estimates
   - [ ] Create dependency map for projects
   - [ ] Set up daily async updates channel

2. **Short-term (Next 2 Sprints):**
   - [ ] Conduct estimation training workshop
   - [ ] Establish tech debt reduction target (10% per sprint)
   - [ ] Implement automated alerts for blockers
   - [ ] Create "Definition of Done" checklist

3. **Long-term (Next Quarter):**
   - [ ] Build internal tool for effort estimation
   - [ ] Establish tech debt metrics dashboard
   - [ ] Create cross-team communication protocol
   - [ ] Implement continuous improvement framework

---

**Takım Feedback Highlights:**

- "Code review culture çok değerli" - Developer A
- "Daha fazla pair programming yapmalıyız" - Developer B
- "Technical debt'i sprint'e dahil edelim" - Tech Lead
- "Planning poker technique deneyelim" - Scrum Master

---

**Retrospektif Metrics:**

- Team Satisfaction Score: 8.2/10 (↑ from 7.8)
- Process Efficiency: 85% (↑ from 80%)
- Communication Quality: 8.5/10 (→ stable)
- Morale: High

---

**Genel Değerlendirme:**

Sprint başarılı geçti. Ekip güçlü, süreçler sağlam, ama iyileştirme alanları mevcut. Aksiyon planı ile bir sonraki sprint'te daha da iyi olacağız.

**Next Retrospective:** ${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString()}`,
      2: `Yaratıcı retrospektif! Öğrenme ve büyüme zamanı:

**Sprint Retrospective - Büyüme Hikayesi 🎨**

---

**Harika Anlar (Celebration Time!) 🎉**

**1. Kod Sanatı 🎭**
- Code review'ler bir öğrenme festivali oldu!
- Test coverage %85 - Kalite zaferi!
- Production'da sıfır hata - Mükemmellik!
- **Vibe:** Ekip olarak rock star'lar gibi performans!

**2. Ekip Enerjisi ⚡**
- Her standup, motivasyon ve enerji doluydu
- İletişim akıcı, samimi ve etkili
- Knowledge sharing'de harika sunumlar
- Pair programming ile birlikte büyüdük
- **Vibe:** Aile gibi çalışıyoruz!

**3. Süreç Evrim 🔄**
- Planning'de daha akıllı olduk
- Dokumentasyon kalitesi arttı (bravo!)
- Deploy'lar sorunsuz gerçekleşti
- Tech debt'i takip etmeye başladık
- **Vibe:** Sürekli gelişiyoruz!

---

**Büyüme Fırsatları (Growth Opportunities) 🌱**

**1. Zaman Yönetimi Sanatı ⏰**
- *Fark:* Bazen tasklar beklenenden uzun sürdü
- *Fırsat:* Tahmin yeteneklerimizi geliştirme şansı!
- *Yaratıcı Çözüm:* "Estimate poker" oyunu oynayalım, eğlenerek öğrenelim!

**2. İletişim Köprüleri 🌉**
- *Fark:* Bazen blocker'lar geç fark edildi
- *Fırsat:* Proaktif iletişim becerimizi güçlendirelim!
- *Yaratıcı Çözüm:* "Daily wins & blocks" Slack channel'ı oluşturalım

**3. Technical Debt Garden 🏗️**
- *Fark:* Technical debt biraz arttı
- *Fırsat:* Temiz kod tutkusunu daha da geliştirme zamanı!
- *Yaratıcı Çözüm:* "Tech debt Friday" - haftada yarım gün temizlik

---

**Aksiyon Macerası (Action Adventure) 🗺️**

**Hemen Başlayalım (Bu Sprint):**
- 🎯 Tech debt sprint organize et (2 gün temizlik partisi!)
- 📊 Time tracking tool'u dene (gamification ile!)
- 🔗 Dependency mapping workshop (visual ve eğlenceli)
- 💬 Async update routine'i başlat (creative format!)

**Yakın Gelecek (2 Sprint):**
- 🎓 Estimation workshop (eğlenceli öğrenme!)
- 🧹 Tech debt %10 azaltma hedefi (challenge accepted!)
- 🚨 Blocker alert sistemi (akıllı bildirimler)
- ✅ "Definition of Done" checklist (visual board!)

**Uzun Vade (Çeyrek):**
- 🛠️ Internal estimation tool geliştir (kendi tool'umuz!)
- 📈 Tech debt dashboard (beautiful metrics!)
- 🌐 Cross-team communication protocol (network expansion!)
- 🔄 Continuous improvement culture (kaizen style!)

---

**Ekip Sesi (Team Voice) 🎤**

💬 "Code review'ler en sevdiğim öğrenme anları!" - Creative Soul
💬 "Pair programming ile çok şey öğreniyorum!" - Growing Developer
💬 "Tech debt'i sprint'in doğal parçası yapalım!" - Wise Tech Lead
💬 "Planning poker'i deneyip tahmin gücümüzü artıralım!" - Agile Champion

---

**Mutluluk Metrikleri 😊**

- 💖 Ekip Memnuniyeti: 8.2/10 (↑ Artıyor!)
- ⚙️ Süreç Verimliliği: %85 (↑ İyileşiyor!)
- 💬 İletişim Kalitesi: 8.5/10 (→ Stabil ve güçlü!)
- 🎈 Takım Morali: Yüksek (Pozitif enerji!)

---

**Retrospektif Özeti:**

Bu sprint, büyüme ve öğrenme dolu bir yolculuktu! Harika şeyler başardık, eğlendik ve birbirimizden öğrendik. İyileştirme alanlarını fırsat olarak görüyoruz ve aksiyonlarla büyümeye devam edeceğiz!

**Motto:** "Her sprint, bir sonraki şaheser için hazırlık!"

**Bir Sonraki Retro:** ${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString()} (Daha da eğlenceli olacak!)

🌈 **Remember:** Retrospective is not about blame, it's about continuous learning and celebration! 🎊`,
      3: `Technical retrospective - Detailed analysis:

\`\`\`
SPRINT RETROSPECTIVE - TECHNICAL ANALYSIS
==========================================
Sprint ID: Sprint ${Math.floor(Math.random() * 10) + 1}
Date: ${new Date().toISOString().split('T')[0]}
Team: Squad 5
Facilitator: Scrum Master

RETROSPECTIVE FORMAT: Start-Stop-Continue + Mad-Sad-Glad

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT WENT WELL (Continue Doing)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Technical Excellence:
├─ Code Review Process
│  ├─ Average review time: 4.1h (improved from 6h)
│  ├─ Review thoroughness: High
│  ├─ Approval rate: 94%
│  └─ Feedback quality: Constructive & detailed
│
├─ Test Coverage
│  ├─ Unit tests: 90% coverage
│  ├─ Integration tests: 80% coverage
│  ├─ E2E tests: 75% coverage
│  └─ Bug detection rate: 92%
│
├─ CI/CD Pipeline
│  ├─ Build success rate: 94%
│  ├─ Deploy frequency: 12 times/sprint
│  ├─ Mean time to deploy: 12 minutes
│  └─ Rollback rate: 0%
│
└─ Production Stability
   ├─ Zero critical incidents
   ├─ Uptime: 99.8%
   ├─ Performance within SLA
   └─ Error rate: 0.3%

Team Collaboration:
├─ Daily Standups
│  ├─ Attendance: 95%
│  ├─ Duration: ~15 minutes (optimal)
│  ├─ Value: High (effective blockers discussion)
│  └─ Format: Efficient
│
├─ Knowledge Sharing
│  ├─ Tech talks: 2 sessions this sprint
│  ├─ Documentation: 24 commits
│  ├─ Pair programming: 15 sessions
│  └─ Cross-training: Active
│
└─ Communication
   ├─ Slack response time: <30 minutes
   ├─ Meeting punctuality: 90%
   └─ Transparency: High

Process Improvements:
├─ Sprint Planning
│  ├─ Estimation accuracy: 90%
│  ├─ Story breakdown: Improved
│  └─ Acceptance criteria: Clear
│
└─ Documentation
   ├─ API docs: Up-to-date
   ├─ Architecture docs: Comprehensive
   └─ Runbooks: Created for critical flows

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DIDN'T GO WELL (Problems Identified)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Time Management Issues:
├─ Task Overruns
│  ├─ 3 tasks took 50% longer than estimated
│  ├─ Root cause: Underestimation complexity
│  ├─ Impact: 2 SP spillover to next sprint
│  └─ Frequency: 15% of tasks
│
├─ Meeting Overruns
│  ├─ 4 meetings exceeded scheduled time
│  ├─ Average overrun: 15 minutes
│  ├─ Reason: Scope creep in discussions
│  └─ Lost productivity: 2 hours total
│
└─ Buffer Time
   ├─ Insufficient buffer for uncertainties
   ├─ No slack time for emergencies
   └─ Sprint felt rushed toward end

Communication Gaps:
├─ Blocker Notifications
│  ├─ 2 blockers discovered late (day 8, 9)
│  ├─ Delayed resolution: 1-2 days
│  ├─ Impact: Downstream task delays
│  └─ Root cause: Not proactive enough
│
├─ Async Updates
│  ├─ Status updates inconsistent
│  ├─ Some WIP items unclear
│  └─ Required sync meetings to clarify
│
└─ Dependency Communication
   ├─ Cross-team dependencies unclear
   ├─ External API changes not communicated early
   └─ Integration issues discovered late

Technical Debt:
├─ Accumulation Rate
│  ├─ New debt added: 3 days
│  ├─ Debt resolved: 1 day
│  ├─ Net increase: 2 days
│  └─ Total debt: 8 days (concern threshold: 10)
│
├─ Prioritization
│  ├─ Debt not in sprint backlog
│  ├─ No dedicated time allocated
│  └─ Reactive approach (fix when breaks)
│
└─ Documentation
   ├─ Some code lacks comments
   ├─ Architecture decisions not documented
   └─ Refactoring opportunities missed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ACTION ITEMS (Stop-Start-Continue)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STOP Doing:
├─ Underestimating task complexity
├─ Allowing meetings to run over
├─ Delaying blocker notifications
└─ Ignoring technical debt until critical

START Doing:
├─ Time Tracking Experiment
│  ├─ Tool: Toggl or Clockify
│  ├─ Purpose: Better estimation data
│  ├─ Duration: 2 sprints (trial)
│  └─ Owner: All developers
│
├─ Daily Async Updates
│  ├─ Channel: #daily-updates Slack channel
│  ├─ Format: Yesterday/Today/Blockers
│  ├─ Time: Before 10 AM
│  └─ Owner: All team members
│
├─ Tech Debt Friday
│  ├─ Cadence: Every Friday afternoon
│  ├─ Duration: 4 hours
│  ├─ Focus: Reduce debt by 10%/sprint
│  └─ Owner: Rotating developers
│
├─ Planning Poker
│  ├─ Tool: Planning Poker app
│  ├─ Purpose: Better estimation consensus
│  ├─ First session: Next sprint planning
│  └─ Owner: Scrum Master
│
└─ Dependency Mapping Workshop
   ├─ Date: This week
   ├─ Duration: 2 hours
   ├─ Output: Visual dependency map
   └─ Owner: Tech Lead

CONTINUE Doing:
├─ Code review excellence
├─ Knowledge sharing sessions
├─ Pair programming
├─ Comprehensive testing
└─ Daily standups (current format)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ACTION PLAN (Prioritized & Time-bound)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMMEDIATE (This Sprint):
┌─────────────────────────────────────────────────┐
│ Action                          │ Owner    │ Due │
├─────────────────────────────────────────────────┤
│ Setup #daily-updates channel    │ SM       │ Day 1│
│ Schedule dependency workshop    │ TL       │ Day 2│
│ Evaluate time tracking tools    │ Dev Team │ Day 3│
│ Create tech debt backlog        │ TL       │ Day 5│
│ Implement meeting time limits   │ SM       │ Day 1│
└─────────────────────────────────────────────────┘

SHORT-TERM (Next 2 Sprints):
┌─────────────────────────────────────────────────┐
│ Action                          │ Owner    │ Due │
├─────────────────────────────────────────────────┤
│ Conduct estimation training     │ SM       │ Spr 2│
│ Reduce tech debt by 20%         │ Team     │ Spr 3│
│ Implement blocker alerts        │ DevOps   │ Spr 2│
│ Create "Definition of Done"     │ TL       │ Spr 2│
│ Establish async comm protocol   │ SM       │ Spr 2│
└─────────────────────────────────────────────────┘

LONG-TERM (Next Quarter):
┌─────────────────────────────────────────────────┐
│ Action                          │ Owner    │ Due │
├─────────────────────────────────────────────────┤
│ Build estimation tool           │ Dev Team │ Q2  │
│ Create tech debt dashboard      │ DevOps   │ Q2  │
│ Establish CI framework          │ TL       │ Q2  │
│ Cross-team comm protocol        │ SM       │ Q2  │
└─────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. METRICS & TRENDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Team Happiness Metrics:
├─ Team Satisfaction: 8.2/10 (↑ +0.4 from last sprint)
├─ Process Efficiency: 85% (↑ +5% from last sprint)
├─ Communication Quality: 8.5/10 (→ stable)
├─ Work-Life Balance: 7.8/10 (→ stable)
└─ Team Morale: HIGH (positive trend)

Sprint Health Indicators:
├─ Velocity: 18 SP (target: 20 SP)
├─ Velocity Stability: Good (σ = 2.1)
├─ Sprint Goal Achievement: 90%
├─ Bug Escape Rate: 0.3% (excellent)
└─ Tech Debt Ratio: 5.4% (acceptable, monitor)

Team Feedback Sentiment Analysis:
├─ Positive: 75%
├─ Neutral: 18%
└─ Negative: 7%

Top Keywords from Feedback:
1. "collaboration" (mentioned 12 times)
2. "code review" (mentioned 10 times)
3. "learning" (mentioned 8 times)
4. "time management" (mentioned 6 times)
5. "technical debt" (mentioned 5 times)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RETROSPECTIVE EFFECTIVENESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Previous Sprint Action Items Status:
├─ Completed: 6/8 (75%)
├─ In Progress: 2/8 (25%)
├─ Not Started: 0/8 (0%)
└─ Blocked: 0/8 (0%)

Completion rate trend: ↗ Improving

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONCLUSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Overall Assessment:
├─ Sprint Success: HIGH (delivered value, high quality)
├─ Team Health: GOOD (positive morale, collaboration)
├─ Process Maturity: IMPROVING (continuous enhancements)
└─ Risk Level: LOW (manageable issues, proactive team)

Key Takeaways:
1. Team collaboration and code quality are strong points
2. Time management and technical debt need attention
3. Communication can be more proactive
4. Action items are clear and achievable
5. Team is committed to continuous improvement

Next Retrospective:
├─ Date: ${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
├─ Format: TBD (consider trying "Sailboat" format)
└─ Action item review: First 15 minutes

Facilitator Notes:
- High engagement during retrospective
- Honest and constructive feedback
- Team ownership of action items
- Positive energy and growth mindset
\`\`\`

**Technical Recommendation:** Proceed with confidence. Team is healthy, issues are addressable, and commitment to improvement is strong.`,
      4: `Akademik retrospektif analizi:

**Sprint Retrospektif - Akademik Değerlendirme Raporu**

*Metodoloji: Grounded Theory & Qualitative Analysis*
*Çerçeve: Agile Retrospective Theory (Derby & Larsen, 2006)*

---

**1. BAŞARILAR (Evidence-Based Success Factors)**

**1.1 Teknik Mükemmellik (Technical Excellence)**

*Teorik Çerçeve: Software Craftsmanship (Martin, 2008)*

- **Code Review Süreci**
  - *Bulgu:* Ortalama review süresi 4.1 saat
  - *Literatür Karşılaştırması:* Industry average: 6-8 saat (Rigby et al., 2012)
  - *Sonuç:* Significantly better than industry standard (p < 0.01)
  - *Referans:* "Understanding the efficacy of code review" (Rigby, 2012)

- **Test Coverage**
  - *Bulgu:* %85 coverage achieved
  - *Akademik Perspektif:* Optimal range %70-90% (Mockus et al., 2009)
  - *Sonuç:* Within research-recommended range
  - *Hipotez Doğrulama:* H1 (High coverage = Low bug rate) SUPPORTED

- **Production Stability**
  - *Bulgu:* Zero critical incidents, 99.8% uptime
  - *Reliability Theory:* Five nines standard (99.999%)
  - *Değerlendirme:* Approaching industry best practices
  - *Referans:* "Site Reliability Engineering" (Beyer et al., 2016)

**1.2 Ekip Dinamikleri (Team Dynamics)**

*Teorik Çerçeve: Tuckman's Stages of Group Development (1965)*

- **Current Stage Assessment:** Performing stage
  - Evidence: High collaboration, self-organization, productivity
  - Indicators: 95% meeting attendance, active knowledge sharing

- **Collaboration Quality**
  - *Sosyal Ağ Analizi:* Strong network density
  - *Communication Patterns:* Bidirectional, frequent, constructive
  - *Referans:* "Team effectiveness in distributed settings" (Cohen & Bailey, 1997)

**1.3 Süreç İyileştirmeleri (Process Improvements)**

*Teorik Çerçeve: Kaizen (Continuous Improvement)*

- **Sprint Planning Accuracy:** 90%
  - *Benchmark:* Industry average: 70-80%
  - *Sonuç:* Superior performance

- **Documentation Quality:** High
  - *Metrik:* 24 documentation commits
  - *Akademik Standart:* IEEE 830 compliance
  - *Değerlendirme:* Meets professional standards

---

**2. İYİLEŞTİRME ALANLARI (Areas for Enhancement)**

**2.1 Zaman Yönetimi (Time Management)**

*Teorik Çerçeve: Estimation Theory in Software Engineering*

- **Problem:** Task duration underestimation
  - *Bulgu:* 15% of tasks exceeded estimates by 50%
  - *Akademik Açıklama:* Planning Fallacy (Kahneman & Tversky, 1979)
  - *Cognitive Bias:* Optimism bias in estimation

- **Literatür İncelemesi:**
  - Jørgensen (2004): "Estimation by analogy" more accurate
  - McConnell (2006): Buffer time recommended (20-30%)

- **Önerilen Çözüm (Evidence-Based):**
  - Planning Poker technique (Grenning, 2002)
  - Reference class forecasting (Flyvbjerg, 2006)
  - Historical data analysis

**2.2 İletişim Açıkları (Communication Gaps)**

*Teorik Çerçeve: Organizational Communication Theory*

- **Problem:** Late blocker discovery
  - *Bulgu:* 2 blockers discovered on day 8-9
  - *Impact Analysis:* 1-2 day delays in downstream tasks

- **Root Cause Analysis (5 Whys Method):**
  1. Why late? → Not communicated proactively
  2. Why not proactive? → No established protocol
  3. Why no protocol? → Assumed synchronous awareness
  4. Why assumption? → Reliance on standups only
  5. Why only standups? → No async mechanism

- **Akademik Çözüm:**
  - Daily Written Reports (Cockburn, 2001)
  - Asynchronous communication tools (Herbsleb, 2007)
  - "Push" vs "Pull" communication model

**2.3 Teknik Borç (Technical Debt)**

*Teorik Çerçeve: Technical Debt Metaphor (Cunningham, 1992)*

- **Problem:** Debt accumulation rate > resolution rate
  - *Bulgu:* Net increase of 2 days this sprint
  - *Current Total:* 8 days (approaching threshold of 10)

- **Akademik Perspektif:**
  - Kruchten et al. (2012): "Principal vs Interest" distinction
  - Technical Debt Ratio: 5.4% (SQALE model: <10% acceptable)

- **Stratejik Yaklaşım (Research-Backed):**
  - Dedicated refactoring time (Fowler, 2019)
  - "Boy Scout Rule" (Martin, 2008)
  - Debt tracking & visualization (Seaman & Guo, 2011)

---

**3. AKSİYON PLANI (Evidence-Based Action Plan)**

**3.1 Acil Aksiyonlar (Bu Sprint)**

**Action 1: Async Communication Protocol**
- *Teorik Temel:* Distributed work theory (Olson & Olson, 2000)
- *Implementation:* Daily written updates
- *Expected Outcome:* Early blocker detection
- *Measurement:* Blocker resolution time ↓50%
- *Owner:* Scrum Master
- *Timeline:* Day 1

**Action 2: Time Tracking Experiment**
- *Teorik Temel:* Evidence-based estimation (Jørgensen, 2004)
- *Implementation:* Tool: Toggl/Clockify
- *Expected Outcome:* Better estimation data
- *Measurement:* Estimation accuracy ↑15%
- *Owner:* Development Team
- *Timeline:* 2-sprint trial

**Action 3: Technical Debt Sprint**
- *Teorik Temel:* Technical debt management (Kruchten, 2012)
- *Implementation:* 2-day cleanup sprint
- *Expected Outcome:* Debt ↓25%
- *Measurement:* Tech debt days reduced
- *Owner:* Tech Lead
- *Timeline:* Week 2

**3.2 Kısa Vadeli Aksiyonlar (2 Sprint)**

**Action 4: Estimation Training**
- *Teorik Temel:* Planning Poker method (Grenning, 2002)
- *Implementation:* Workshop + practice sessions
- *Expected Outcome:* Consensus & accuracy ↑
- *Measurement:* Velocity stability (σ ↓)
- *Owner:* Scrum Master
- *Timeline:* Sprint 2

**Action 5: Definition of Done Checklist**
- *Teorik Temel:* Quality assurance standards
- *Implementation:* Collaborative checklist creation
- *Expected Outcome:* Quality consistency
- *Measurement:* Done criteria compliance %100
- *Owner:* Tech Lead + Team
- *Timeline:* Sprint 2

**3.3 Uzun Vadeli Aksiyonlar (Çeyrek)**

**Action 6: Technical Debt Dashboard**
- *Teorik Temel:* Visualization & metrics (Seaman, 2011)
- *Implementation:* Automated tracking dashboard
- *Expected Outcome:* Transparent debt management
- *Measurement:* Debt visibility & reduction trend
- *Owner:* DevOps Team
- *Timeline:* Q2

---

**4. METRİKLER VE ANALİZ (Quantitative Analysis)**

**4.1 Takım Memnuniyeti (Team Satisfaction)**

*Ölçüm Yöntemi: Likert Scale (1-10)*

- **Team Satisfaction:** 8.2/10
  - *Trend Analysis:* ↑ +0.4 (from 7.8)
  - *Statistical Significance:* p = 0.03 (significant improvement)
  - *Benchmark:* Industry average: 7.5/10
  - *Sonuç:* Above industry average

- **Process Efficiency:** 85%
  - *Trend Analysis:* ↑ +5% (from 80%)
  - *Benchmark:* Mature agile teams: 80-90%
  - *Sonuç:* Within optimal range

**4.2 Performans Metrikleri (Performance Metrics)**

*Ölçüm Çerçevesi: Velocity-based analysis*

- **Velocity:** 18 SP (target: 20 SP)
  - *Achievement Rate:* 90%
  - *Velocity Stability:* σ = 2.1 (Good: <3)
  - *Predictability:* High (reliable planning)

- **Quality Metrics:**
  - Bug escape rate: 0.3% (Excellent: <1%)
  - Test coverage: 85% (Optimal: 70-90%)
  - Code review compliance: 100%

**4.3 Trend Analysis (Time Series)**

*Yöntem: Moving average & regression analysis*

\`\`\`
Metric Trends (Last 5 Sprints):
├─ Team Satisfaction: 7.2 → 7.5 → 7.8 → 8.0 → 8.2 (↗)
├─ Velocity: 16 → 17 → 18 → 18 → 18 (→ stable)
├─ Process Efficiency: 70% → 75% → 80% → 82% → 85% (↗)
└─ Tech Debt: 5d → 6d → 7d → 8d → 8d (↗ concern)
\`\`\`

*Interpretation:*
- Positive trend: Satisfaction, process efficiency
- Stable trend: Velocity (predictable)
- Concerning trend: Technical debt (needs attention)

---

**5. LİTERATÜR ENTEGRASYONU (Research Integration)**

**Başarı Faktörleri - Akademik Destekler:**

1. **Code Review Excellence**
   - Rigby et al. (2012): "Code reviews improve quality by 60%"
   - McIntosh et al. (2014): "Timely reviews critical"
   - **Our Evidence:** 4.1h avg review time ✓

2. **Test-Driven Development**
   - George & Williams (2003): "TDD improves quality"
   - Janzen & Saiedian (2005): "75-90% coverage optimal"
   - **Our Evidence:** 85% coverage ✓

3. **Team Collaboration**
   - Tuckman (1965): "Performing stage = high productivity"
   - Cohen & Bailey (1997): "Team effectiveness"
   - **Our Evidence:** Strong collaboration ✓

**İyileştirme Alanları - Akademik Rehberlik:**

1. **Estimation Accuracy**
   - Jørgensen (2004): "Expert judgment + historical data"
   - Kahneman (1979): "Planning fallacy awareness"
   - **Action:** Planning poker, time tracking

2. **Communication**
   - Herbsleb (2007): "Async communication in distributed teams"
   - Olson & Olson (2000): "Distance matters"
   - **Action:** Daily written updates protocol

3. **Technical Debt**
   - Cunningham (1992): "Debt metaphor"
   - Kruchten et al. (2012): "Debt management strategies"
   - **Action:** Dedicated cleanup time, dashboard

---

**6. SONUÇ VE ÖNERİLER (Conclusion & Recommendations)**

**Genel Değerlendirme:**

*Nitel Bulgu:* Ekip "Performing" aşamasında, yüksek kalite ve işbirliği
*Nicel Bulgu:* Metrikler literatürle uyumlu, endüstri ortalamasının üzerinde
*Trend Analizi:* Pozitif gelişim trendi, sürdürülebilir performans

**Akademik Sonuç:**
Sprint başarılı ve sürdürülebilir. İyileştirme alanları belirgin, aksiyonlar kanıt tabanlı, gerçekleşebilir.

**Hipotez Testleri:**
- H1: Code review → Quality ✓ DESTEKLENDI
- H2: Test coverage → Bug rate ↓ ✓ DESTEKLENDI
- H3: Team collaboration → Productivity ✓ DESTEKLENDI

**Öneriler (Evidence-Based):**

**Öncelik 1 (Critical):**
- Async communication protocol (Herbsleb, 2007)
- Time tracking for better estimation (Jørgensen, 2004)

**Öncelik 2 (High):**
- Technical debt management (Kruchten, 2012)
- Estimation training (Grenning, 2002)

**Öncelik 3 (Medium):**
- Continuous improvement dashboard
- Cross-team communication protocol

**Akademik Değerlendirme:** Exemplary team performance with clear path for improvement. Research-backed actions ensure high likelihood of success.

**Peer Review Notu:** Methodology sound, data reliable, conclusions justified.

---

**Referanslar:**

- Beyer, B. et al. (2016). Site Reliability Engineering. O'Reilly.
- Cunningham, W. (1992). The WyCash Portfolio Management System. OOPSLA.
- Derby, E. & Larsen, D. (2006). Agile Retrospectives. Pragmatic Bookshelf.
- Jørgensen, M. (2004). A review of studies on expert estimation. IEEE.
- Kruchten, P. et al. (2012). Technical debt: From metaphor to theory. IEEE.
- Martin, R. C. (2008). Clean Code. Prentice Hall.
- Rigby, P. C. et al. (2012). Understanding the efficacy of code review. ACM.
- Tuckman, B. W. (1965). Developmental sequence in small groups. Psych Bulletin.

**Sonraki Retrospektif:** ${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString()}
**Format Önerisi:** Sailboat method (team suggestion)`
    }
  };

  return responses[routineId]?.[personaId] || `Merhaba! Size nasıl yardımcı olabilirim?`;
};

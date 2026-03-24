export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh",
      padding: "60px",
      fontFamily: "sans-serif",
      background: "linear-gradient(to bottom, #ffffff, #f5f5f5)"
    }}>
      
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <h1 style={{ fontSize: "18px", marginBottom: "20px", opacity: 0.6 }}>
          一般社団法人松石量子再生研究所
        </h1>

        <h2 style={{ fontSize: "44px", lineHeight: "1.4", marginBottom: "30px" }}>
          生命・感情・場の再生を探究する。
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "50px", opacity: 0.8 }}>
          MQRI（Matsuishi Quantum Regeneration Institute）は、<br />
          生命、感情、自然、身体、文化を横断しながら、<br />
          「再生」というテーマを研究・実践する研究所です。
        </p>

        <div style={{ marginBottom: "80px" }}>
          <button style={{ marginRight: "10px", padding: "12px 24px" }}>
            活動を見る
          </button>
          <button style={{ padding: "12px 24px" }}>
            お問い合わせ
          </button>
        </div>

      </div>
    </main>
  );
}

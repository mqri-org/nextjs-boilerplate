export default function Home() {
  return (
    <main style={{ padding: "60px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        一般社団法人松石量子再生研究所
      </h1>

      <h2 style={{ fontSize: "40px", lineHeight: "1.4", marginBottom: "30px" }}>
        生命・感情・場の再生を探究する。
      </h2>

      <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "40px" }}>
        MQRI（Matsuishi Quantum Regeneration Institute）は、<br />
        生命、感情、自然、身体、文化を横断しながら、<br />
        「再生」というテーマを研究・実践する研究所です。
      </p>

      <div style={{ marginBottom: "60px" }}>
        <button style={{ marginRight: "10px", padding: "10px 20px" }}>
          活動を見る
        </button>
        <button style={{ padding: "10px 20px" }}>
          お問い合わせ
        </button>
      </div>

      <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>
        プロジェクト
      </h3>

      <ul style={{ lineHeight: "2" }}>
        <li>八百万の蜂プロジェクト</li>
        <li>蜂ミュージック</li>
        <li>感情研究</li>
      </ul>

      <h3 style={{ fontSize: "24px", marginTop: "60px", marginBottom: "20px" }}>
        お問い合わせ
      </h3>

      <p>info@mqri.or.jp</p>

    </main>
  );
}

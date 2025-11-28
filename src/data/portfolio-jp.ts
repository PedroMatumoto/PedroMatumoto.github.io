import { Project, Experience, Certification } from "./portfolio";

export const portfolioData = {
  name: "Pedro Matumoto",
  title: "ソフトウェアエンジニア",
  titleJP: "ソフトウェアエンジニア",
  about: "ロボット工学、自動化、バックエンド、クラウドの確かな経験を持つコンピュータエンジニア。AI、クラウドインフラ、最新のアーキテクチャを統合したスケーラブルなソリューションの構築を専門としています。",
  aboutJP: "ロボット工学、自動化、バックエンド、クラウドの確かな経験を持つコンピュータエンジニア。AI、クラウドインフラ、最新のアーキテクチャを統合したスケーラブルなソリューションの構築を専門としています。",
  skills: [
    "Python", "ROS2", "C", "OpenCV", "Nav2", "MoveIt", "Gazebo", "SLAM",
    "Microsoft SQL Server", "Django", "Docker", "Azure", "AWS", "Google Cloud", "Terraform",
    "TypeScript", "React", "FastAPI", "Kubernetes"
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      date: "08/2023",
      link: "https://www.credly.com/badges/9ca0b5f9-6f4d-46c1-889f-7b7d94d5a87e/public_url",
    },
    {
      name: "Linux Essentials",
      issuer: "Cisco",
      date: "2022",
    },
    {
      name: "Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "03/2024",
      link: "https://www.credly.com/badges/a051f691-ba9f-4f2e-8c8d-ee700c6a94bd/public_url",
    },
    {
      name: "AZ-900 Azure Fundamentals",
      issuer: "Microsoft",
      date: "10/2024",
      link: "https://learn.microsoft.com/api/credentials/share/pt-br/PedroMatumoto-9901/8DB5E10E5D4597FA?sharingId=18D2DEB419144A0A",
    },
    {
      name: "TOEFL ITP - 597 (B2)",
      issuer: "ETS",
      date: "2022",
    }
  ] as Certification[],
  experiences: [
    {
      company: "Alvarez & Marsal",
      role: "ソフトウェアエンジニア",
      period: "05/2025 - 現在",
      description: "AI文書処理システム（Azure OpenAI）、プロセス自動化（RPA）による30%の時間短縮、分散クラウドインフラの開発。FastAPIを用いたAPIの実装、複雑なダッシュボード、CI/CDパイプラインの構築。",
      technologies: ["Azure OpenAI", "RPA", "FastAPI", "CI/CD", "Azure"],
    },
    {
      company: "Alvarez & Marsal",
      role: "ソフトウェアエンジニア インターン",
      period: "11/2023 - 05/2025",
      description: "Pythonによる自動化ソリューション（RPA）およびC# WPFフロントエンドを用いたデスクトップアプリケーションの開発、Microsoft SQL Serverとの統合、データベースモデリングを含む。分散クラウドコンピューティングシステムの実装により、データ処理を40%改善。FastAPIを用いた分析ダッシュボードとAPIの作成、Azure DevOpsでのデプロイパイプラインの管理。",
      technologies: ["Python", "RPA", "C#", "WPF", "SQL Server", "Azure", "FastAPI"],
    }
  ] as Experience[],
  projects: [
    {
      title: "Mirai - 自律型ロボット",
      slug: "mirai-robo-autonomo",
      description: "自律走行、人間とロボットの相互作用、環境認識、Whisper (OpenAI) による音声解釈を備えたサービスロボット用ソフトウェアシステム。",
      longDescription: "人間とロボットの相互作用および屋内ナビゲーションに焦点を当てた、自律型サービスロボットの完全なソフトウェアシステム開発。プロジェクトでは、モジュールのオーケストレーションとセンサー・アクチュエータ間の通信にROS2を使用しました。Whisper (OpenAI) を使用した高度な音声解釈機能に加え、環境認識、人物検出、自律的な意思決定のためのコンピュータビジョンと人工知能を実装しました。システムはモジュール式で柔軟性があり、実際のアプリケーションに対応できるように設計されています。",
      features: [
        "屋内自律走行 (Nav2)",
        "音声と視覚による人間とロボットの相互作用",
        "環境と物体の認識",
        "ROS2に基づくモジュラーアーキテクチャ"
      ],
      technologies: ["ROS2", "Python", "OpenAI Whisper", "Computer Vision", "Nav2"],
      link: "https://imt-at-home.github.io",
      github: "https://github.com/IMT-AT-home",
      gallery: [],
      videos: ['https://youtu.be/_0UWpudF1pA'],
    },
    {
      title: "SynMed",
      slug: "synmed",
      description: "AIと自然言語処理を使用した薬の副作用特定支援システム。",
      longDescription: "SynMedは、医療およびファーマコビジランス向けのツールであり、薬の副作用の可能性の分析と監視を支援するように設計されています。このシステムは、高度な人工知能と自然言語処理（NLP）技術を使用して、ユーザーから報告された症状を分析し、登録された医薬品と関連付け、潜在的な副作用を示します。臨床業務を補完し、患者の安全に貢献することを目的としています。",
      features: [
        "AIとNLPによる症状分析",
        "副作用の特定",
        "ファーマコビジランス支援",
        "大規模モニタリング"
      ],
      technologies: ["Python", "FastAPI", "PyTorch", "Pandas", "Numpy", "Spacy", "Streamlit", "MongoDB", "Hugging Face"],
      github: "https://github.com/PedroMatumoto/SynMed/tree/feat/api-transfering",
    },
    {
      title: "Scrapihaus",
      slug: "scrapihaus",
      description: "FastAPI、MongoDB、Cloud Runを使用した最新アーキテクチャの分散Webスクレイピングプラットフォーム。",
      longDescription: "Webスクレイピングと自動化のための堅牢なプラットフォームの個人プロジェクト。アーキテクチャはマイクロサービスに基づいており、高性能なFastAPIと柔軟な非構造化データストレージのためのMongoDBを使用しています。システムは高度なスクレイピングプロセススケジューリングを備えており、Google Cloud Runにデプロイされ、スケーラビリティと効率を保証します。React/TypeScriptフロントエンドは、収集されたデータの管理と視覚化のための直感的なインターフェースを提供します。",
      features: [
        "FastAPIによる高性能API",
        "MongoDBによるNoSQLストレージ",
        "Google Cloud Runでのスケーラブルなデプロイ",
        "スクレイピングプロセスのスケジューリング",
        "React/TypeScriptフロントエンド"
      ],
      technologies: ["FastAPI", "MongoDB", "Google Cloud Run", "Python", "React", "TypeScript", "Web Scraping"],
      github: "https://github.com/TobyNest/scrapihaus_back",
      link: "https://scrapihaus.vercel.app/",
      gallery: ['/images/scrapihaus_landing_page.png'],
    },
    {
      title: "時間割システム (Fontys)",
      slug: "sistema-grade-horaria-fontys",
      description: "React、Vite、Tailwind CSSを使用した、Microsoft Entra ID認証付きの時間割システム開発。",
      longDescription: "Fontys University（オランダ）向けに開発された国際プロジェクト。目的は、直感的でレスポンシブな時間割システムを作成することでした。Microsoft Entra ID（旧Azure AD）を使用して、安全なフロントエンド認証を実装しました。使用された技術には、インターフェース用のReact、ビルドツール用のVite、スタイリング用のTailwind CSSが含まれます。技術開発に加えて、プロジェクトにはブラジルとオランダのチーム間のコミュニケーションファシリテーターとしての役割も含まれていました。",
      features: [
        "Microsoft Entra IDによる認証",
        "Reactによるレスポンシブインターフェース",
        "Tailwind CSSによるスタイリング",
        "国際協力"
      ],
      technologies: ["React", "Microsoft Entra ID", "Vite", "Tailwind CSS"],
      github: "https://github.com/20242-Maua-ECM-Fontys/front",
      gallery: ['/images/fontys_grid_example.jpg', '/images/fontys_landing_page.jpg'],
      videos: [],
    },
    {
      title: "インテリジェント処理システム",
      slug: "sistema-processamento-inteligente",
      description: "Azure OpenAI、Django、Docker、Kubernetesを統合した、AIによる機密文書処理のためのシステムアーキテクチャ。",
      longDescription: "文書フローの自動化と機密データの安全な取り扱いに焦点を当てたプロジェクト。システムアーキテクチャは、AI統合と本番パイプラインを使用して設計および実装されました。Azure OpenAIは、データの抽出と強化のために統合されました。バックエンドはDjangoで開発され、JavaScriptによる自動化が行われました。インフラストラクチャはDockerとKubernetesを使用して構成され、CI/CDパイプラインはGitHub ActionsとAzure DevOpsで作成されました。その結果、堅牢でスケーラブルなシステムが実現しました。",
      features: [
        "自動化された文書処理",
        "Azure OpenAIによるデータ抽出",
        "Kubernetesによるスケーラブルなインフラ",
        "自動化されたCI/CDパイプライン"
      ],
      technologies: ["Azure OpenAI", "Django", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "BoraMarcar",
      slug: "boramarcar",
      description: "TypeScript、MongoDB、SOLID原則に基づいたマイクロサービスベースのスケジューリングプラットフォーム。",
      longDescription: "When2meetに触発されたWebアプリケーションで、TypeScriptを使用した堅牢なマイクロサービスアーキテクチャで開発されました。バックエンドはSOLID原則とクリーンアーキテクチャに厳密に従っており、分離され、テスト可能で、保守が容易なコードを保証します。データ永続化にMongoDBを使用し、参加者の空き状況に基づいて自動的に時間を提案します。",
      features: [
        "マイクロサービスアーキテクチャ",
        "SOLIDを用いたTypeScriptバックエンド",
        "MongoDBによる永続化",
        "自動スケジュール提案"
      ],
      technologies: ["TypeScript", "Microservices", "MongoDB", "SOLID", "Clean Architecture"],
      github: "https://github.com/4-ANO-COMP-IMT/ac2",
      gallery: ['/images/bora_marcar_landing_page.png', '/images/bora_marcar_schedule_example.jpg'],
    },
  ] as Project[],
  contact: {
    email: "pedromatumoto@gmail.com",
    github: "https://github.com/PedroMatumoto",
    linkedin: "https://linkedin.com/in/pedromatumoto",
  },
  ui: {
    experience: "経験",
    projects: "プロジェクト",
    skills: "スキル",
    contact: "お問い合わせ",
    viewProject: "プロジェクトを見る",
    viewCode: "コードを見る",
    viewDetails: "詳細を見る",
    certifications: "資格",
    hardSkills: "ハードスキル",
    getInTouch: "お問い合わせ",
    contactText: "質問がある場合や、単に挨拶したい場合でも、できる限りお答えします！",
    overview: "概要",
    keyFeatures: "主な機能",
    videos: "ビデオ",
    gallery: "ギャラリー",
    technologies: "技術",
    links: "リンク",
    viewSourceCode: "ソースコードを見る",
    liveDemo: "ライブデモ",
    noLinks: "公開リンクはありません。",
    backToHome: "ホームに戻る",
    about: "私について",
  }
};

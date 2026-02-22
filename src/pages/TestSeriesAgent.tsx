import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import {
    Brain,
    Target,
    Clock,
    Zap,
    BarChart3,
    ChevronRight,
    AlertCircle,
    CheckCircle2,
    Trophy,
    History,
    BookOpen,
    ArrowRight,
    Sparkles,
    TrendingUp,
    LineChart,
    ListChecks
} from "lucide-react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";
import testAgentImg from "@/assets/test-agent.png";

const performanceData = [
    { name: "Test 1", score: 65, avg: 60 },
    { name: "Test 2", score: 72, avg: 62 },
    { name: "Test 3", score: 68, avg: 64 },
    { name: "Test 4", score: 85, avg: 65 },
    { name: "Test 5", score: 78, avg: 66 },
    { name: "Test 6", score: 92, avg: 68 },
];

const subjectData = [
    { subject: "Quantitative Aptitude", A: 85, fullMark: 100 },
    { subject: "Logical Reasoning", A: 90, fullMark: 100 },
    { subject: "Verbal Ability", A: 70, fullMark: 100 },
    { subject: "General Awareness", A: 65, fullMark: 100 },
    { subject: "Technical Skills", A: 80, fullMark: 100 },
    { subject: "Data Interpretation", A: 75, fullMark: 100 },
];

const weaknesses = [
    { topic: "Static GK (Indian History)", subject: "General Awareness", impact: "High", questions: 15 },
    { topic: "Probability & Permutations", subject: "Quantitative Aptitude", impact: "Medium", questions: 12 },
    { topic: "Syllogism & Deductions", subject: "Logical Reasoning", impact: "Medium", questions: 10 },
    { topic: "System Design Basics", subject: "Technical Skills", impact: "High", questions: 8 },
];

const TestSeriesAgent = () => {
    const [activeTab, setActiveTab] = useState<"overview" | "analysis" | "practice" | "history">("overview");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisStep, setAnalysisStep] = useState(0);

    useEffect(() => {
        document.title = "AI Test Series Agent | SynkPlan - Personalized Exam Prep";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Experience the next-gen AI-powered test series. Identify weak areas, get targeted practice, and track your selection rate with real-time analytics.");
        }
    }, []);

    const startAnalysis = () => {
        setIsAnalyzing(true);
        setAnalysisStep(0);

        const steps = [
            "Gathering historical test data...",
            "Identifying pattern of errors...",
            "Correlating topic difficulty with time spent...",
            "Generating personalized improvement path...",
            "Calculating future performance projection..."
        ];

        let currentStep = 0;
        const interval = setInterval(() => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                setAnalysisStep(currentStep);
            } else {
                clearInterval(interval);
                setTimeout(() => setIsAnalyzing(false), 1000);
                setActiveTab("analysis");
            }
        }, 1500);
    };

    return (
        <Layout>
            <div className="min-h-screen bg-[#F8FAFC]">
                {/* Header Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 -z-10" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-sm font-semibold">
                                        <Sparkles className="w-4 h-4" />
                                        <span>AI Powered Test Analytics</span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-sm font-semibold animate-pulse">
                                        <span>Coming Soon</span>
                                    </div>
                                </div>
                                <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                                    Land Your Dream Job with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">AI Precision</span>
                                </h1>
                                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                                    Our AI Agent analyzes your performance in mock recruitment tests to identify skill gaps.
                                    Get placement-ready with real-time analytics and targeted improvement plans.
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <button
                                        onClick={startAnalysis}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
                                    >
                                        <Brain className="w-5 h-5" />
                                        Start Agent Analysis
                                    </button>
                                    <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                                        <History className="w-5 h-5" />
                                        View History
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div className="relative z-10 animate-float">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[2.5rem] blur-2xl opacity-20" />
                                    <img
                                        src={testAgentImg}
                                        alt="Test Agent"
                                        className="w-full max-w-md mx-auto relative rounded-[2rem] shadow-2xl"
                                    />
                                </div>
                                {/* Floating Stats UI */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-slide-up z-20 hidden sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Improvement</p>
                                            <p className="text-lg font-bold text-slate-900">+24.5%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dashboard Navigation */}
                <div className="sticky top-[64px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex overflow-x-auto no-scrollbar">
                            {[
                                { id: "overview", label: "Overview", icon: BarChart3 },
                                { id: "analysis", label: "Agent Analysis", icon: Brain },
                                { id: "practice", label: "Targeted Practice", icon: Target },
                                { id: "history", label: "Test History", icon: History },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all whitespace-nowrap ${activeTab === tab.id
                                        ? "border-blue-600 text-blue-600 font-bold"
                                        : "border-transparent text-slate-500 hover:text-slate-700"
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <main className="max-w-7xl mx-auto px-4 py-12">
                    {activeTab === "overview" && (
                        <div className="space-y-8 animate-fade-in">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { label: "Tests Completed", value: "24", icon: CheckCircle2, color: "blue" },
                                    { label: "Avg. Accuracy", value: "78.4%", icon: Target, color: "green" },
                                    { label: "Study Time", value: "142h", icon: Clock, color: "purple" },
                                    { label: "Selection Chance", value: "82%", icon: Trophy, color: "orange" },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.color === 'blue' ? 'bg-blue-50' :
                                            stat.color === 'green' ? 'bg-green-50' :
                                                stat.color === 'purple' ? 'bg-purple-50' : 'bg-orange-50'
                                            }`}>
                                            <stat.icon className={`w-6 h-6 ${stat.color === 'blue' ? 'text-blue-600' :
                                                stat.color === 'green' ? 'text-green-600' :
                                                    stat.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                                                }`} />
                                        </div>
                                        <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Charts Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Score Progression</h3>
                                            <p className="text-sm text-slate-500">Your performance across recent tests</p>
                                        </div>
                                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                                            <LineChart className="w-5 h-5 text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="h-[300px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={performanceData}>
                                                <defs>
                                                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                                                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                                                <Tooltip />
                                                <Area type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                                                <Area type="monotone" dataKey="avg" stroke="#94A3B8" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Subject Mastery</h3>
                                            <p className="text-sm text-slate-500">Breakdown of current proficiency levels</p>
                                        </div>
                                        <div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center">
                                            <Brain className="w-5 h-5 text-cyan-600" />
                                        </div>
                                    </div>
                                    <div className="h-[300px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={subjectData}>
                                                <PolarGrid stroke="#E2E8F0" />
                                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 12 }} />
                                                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                                <Radar
                                                    name="Student"
                                                    dataKey="A"
                                                    stroke="#06B6D4"
                                                    fill="#06B6D4"
                                                    fillOpacity={0.5}
                                                />
                                            </RadarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "analysis" && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Brain size={240} className="text-white" />
                                </div>

                                <div className="relative z-10 max-w-3xl">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <Brain className="text-cyan-400" />
                                        AI Weak Area Identification
                                    </h3>
                                    <p className="text-slate-300 mb-8 leading-relaxed">
                                        Based on your last 10 full-length tests, our agent has identified specific conceptual gaps.
                                        Addressing these topics could increase your predicted score by up to <span className="text-green-400 font-bold">12%</span>.
                                    </p>

                                    <div className="space-y-4">
                                        {weaknesses.map((w, idx) => (
                                            <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${w.impact === 'High' ? 'bg-red-500/20' : 'bg-amber-500/20'}`}>
                                                        <AlertCircle className={w.impact === 'High' ? 'text-red-400' : 'text-amber-400'} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-white">{w.topic}</h4>
                                                        <p className="text-xs text-slate-400">{w.subject} • Impact: {w.impact}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <button className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                                                        Get Practice <ChevronRight size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                                    <h4 className="text-lg font-bold text-slate-900 mb-6 font-primary">Placement Feedback</h4>
                                    <div className="space-y-6">
                                        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                            <p className="text-sm text-blue-800 font-medium mb-1">Observation</p>
                                            <p className="text-blue-900 text-base font-medium">
                                                "Your speed in Quantitative sections decreases in the final 10 minutes, indicating a need for better time management."
                                            </p>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                                            <p className="text-sm text-green-800 font-medium mb-1">Recommendation</p>
                                            <p className="text-green-900 text-base font-medium">
                                                "Practice 20-minute rapid-fire aptitude drills to build speed and accuracy under extreme time pressure."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                                    <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <Zap className="text-amber-500 w-5 h-5" />
                                        Recommended Path
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { step: 1, text: "Strengthen Static GK (General Awareness)", status: "next" },
                                            { step: 2, text: "Attempt 20-question Coding Assessment", status: "locked" },
                                            { step: 3, text: "Review SQL Joins and Query Optimization", status: "locked" },
                                        ].map((s) => (
                                            <div key={s.step} className="flex items-center gap-4">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${s.status === 'next' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                                    {s.step}
                                                </div>
                                                <span className={s.status === 'next' ? 'font-semibold text-slate-900' : 'text-slate-500'}>{s.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "practice" && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">Targeted Practice</h2>
                                    <p className="text-slate-500">Custom sessions generated by AI to tackle your weaknesses.</p>
                                </div>
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    Generate New Session
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Quantitative Mastery", questions: 25, time: "30m", level: "Expert", color: "blue" },
                                    { title: "Verbal Ability Drills", questions: 20, time: "20m", level: "Intermediate", color: "purple" },
                                    { title: "Data Interpretation Pro", questions: 30, time: "45m", level: "Advanced", color: "cyan" },
                                    { title: "Logical Reasoning Set", questions: 15, time: "25m", level: "Beginner", color: "green" },
                                    { title: "Static Awareness Recap", questions: 50, time: "15m", level: "Intermediate", color: "red" },
                                ].map((session, i) => (
                                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${session.color === 'blue' ? 'bg-blue-50' :
                                            session.color === 'purple' ? 'bg-purple-50' :
                                                session.color === 'cyan' ? 'bg-cyan-50' :
                                                    session.color === 'green' ? 'bg-green-50' : 'bg-red-50'
                                            }`}>
                                            <BookOpen className={`w-6 h-6 ${session.color === 'blue' ? 'text-blue-600' :
                                                session.color === 'purple' ? 'text-purple-600' :
                                                    session.color === 'cyan' ? 'text-cyan-600' :
                                                        session.color === 'green' ? 'text-green-600' : 'text-red-600'
                                                }`} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{session.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                                            <span className="flex items-center gap-1"><ListChecks className="w-4 h-4" /> {session.questions} Qs</span>
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {session.time}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">{session.level}</span>
                                            <button className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "history" && (
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden animate-fade-in">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 border-b border-slate-100">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Test Name</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Score</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Percentile</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {[
                                            { name: "SSC CGL Tier 1 Mock", date: "Oct 24, 2023", score: "165/200", percentile: "98.2", status: "Completed" },
                                            { name: "AMCAT Aptitude Test", date: "Oct 20, 2023", score: "890/900", percentile: "99.1", status: "Completed" },
                                            { name: "UPSC CSAT Practice", date: "Oct 18, 2023", score: "145/200", percentile: "94.5", status: "Completed" },
                                            { name: "TCS NQT Assessment", date: "Oct 15, 2023", score: "72/100", percentile: "88.9", status: "Completed" },
                                        ].map((test, i) => (
                                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-slate-900">{test.name}</td>
                                                <td className="px-6 py-4 text-slate-500">{test.date}</td>
                                                <td className="px-6 py-4 text-slate-900 font-medium">{test.score}</td>
                                                <td className="px-6 py-4">
                                                    <span className="text-green-600 font-bold">{test.percentile}%</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg">
                                                        {test.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button className="text-blue-600 font-bold hover:underline">Analysis</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </main>

                {/* Global CTA Section */}
                <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        <h2 className="text-3xl sm:text-5xl font-extrabold mb-8">Ready to get your dream placement?</h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                            Get the SynkPlan app today and let our AI Agent guide you to career success. Available for all major job assessments.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.khushbu.synkplan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold shadow-2xl hover:bg-slate-50 transition-all"
                            >
                                Download SynkPlan
                                <ChevronRight className="animate-bounce-x" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Analysis Loading Overlay */}
            {isAnalyzing && (
                <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-4">
                    <div className="max-w-md w-full text-center">
                        <div className="relative mb-12">
                            <div className="w-32 h-32 bg-blue-500/20 rounded-full mx-auto flex items-center justify-center animate-pulse">
                                <Brain size={60} className="text-blue-400 animate-bounce" />
                            </div>
                            <div className="absolute inset-0 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Agent is Analyzing</h3>
                        <div className="space-y-4 text-left max-w-xs mx-auto">
                            {[
                                "Gathering historical test data...",
                                "Identifying pattern of errors...",
                                "Correlating topic difficulty with time spent...",
                                "Generating personalized improvement path...",
                                "Calculating future performance projection..."
                            ].map((step, idx) => (
                                <div key={idx} className={`flex items-center gap-3 transition-opacity duration-500 ${analysisStep >= idx ? 'opacity-100' : 'opacity-20'}`}>
                                    {analysisStep > idx ? (
                                        <CheckCircle2 className="text-green-400 w-5 h-5 flex-shrink-0" />
                                    ) : analysisStep === idx ? (
                                        <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                                    ) : (
                                        <div className="w-5 h-5 border-2 border-slate-700 rounded-full flex-shrink-0" />
                                    )}
                                    <p className={`text-sm ${analysisStep === idx ? 'text-white font-bold' : 'text-slate-400'}`}>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Styles for Utilities */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}} />
        </Layout>
    );
};

export default TestSeriesAgent;

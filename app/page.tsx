'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Film, Sparkles, Clock, Download, Play, Wand2, Image as ImageIcon, Music, Mic } from 'lucide-react'

interface VideoSettings {
  duration: string
  style: string
  music: string
  voice: string
}

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [settings, setSettings] = useState<VideoSettings>({
    duration: '60',
    style: 'cinematic',
    music: 'dramatic',
    voice: 'professional'
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setProgress(0)
    setGeneratedVideo(null)

    // Simulate video generation process
    const steps = [
      { progress: 15, message: 'Analyzing your prompt...' },
      { progress: 30, message: 'Generating script...' },
      { progress: 50, message: 'Creating visuals...' },
      { progress: 70, message: 'Adding music and voice...' },
      { progress: 90, message: 'Rendering video...' },
      { progress: 100, message: 'Complete!' }
    ]

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProgress(step.progress)
    }

    // Simulate video URL (in real implementation, this would be from API)
    setGeneratedVideo('generated-video-' + Date.now())
    setIsGenerating(false)
  }

  const examples = [
    "The evolution of ancient civilizations and their architectural marvels",
    "Deep ocean exploration: Discovering creatures of the abyss",
    "The journey of space exploration from the Moon landing to Mars",
    "Climate change: A visual story of our changing planet",
    "The rise and fall of the Roman Empire in 10 minutes"
  ]

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 pt-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Film className="w-12 h-12 text-purple-500" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Documentary Video Maker
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Transform your ideas into professional YouTube documentaries with AI
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Panel - Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Prompt Input */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-purple-400" />
                Your Documentary Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your documentary idea... (e.g., 'Create a 5-minute documentary about the history of artificial intelligence, from early computing to modern AI')"
                className="w-full h-32 bg-black/30 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />

              {/* Example Prompts */}
              <div className="mt-4">
                <p className="text-xs text-gray-400 mb-2">Try these examples:</p>
                <div className="flex flex-wrap gap-2">
                  {examples.map((example, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPrompt(example)}
                      className="text-xs bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1 transition-colors"
                    >
                      {example.slice(0, 40)}...
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Duration */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Duration
                </label>
                <select
                  value={settings.duration}
                  onChange={(e) => setSettings({...settings, duration: e.target.value})}
                  className="w-full bg-black/30 border border-white/20 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="30">30 seconds</option>
                  <option value="60">1 minute</option>
                  <option value="180">3 minutes</option>
                  <option value="300">5 minutes</option>
                  <option value="600">10 minutes</option>
                </select>
              </div>

              {/* Visual Style */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-green-400" />
                  Visual Style
                </label>
                <select
                  value={settings.style}
                  onChange={(e) => setSettings({...settings, style: e.target.value})}
                  className="w-full bg-black/30 border border-white/20 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="cinematic">Cinematic</option>
                  <option value="documentary">Documentary</option>
                  <option value="modern">Modern</option>
                  <option value="vintage">Vintage</option>
                  <option value="animated">Animated</option>
                </select>
              </div>

              {/* Music */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Music className="w-4 h-4 text-yellow-400" />
                  Music
                </label>
                <select
                  value={settings.music}
                  onChange={(e) => setSettings({...settings, music: e.target.value})}
                  className="w-full bg-black/30 border border-white/20 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="dramatic">Dramatic</option>
                  <option value="uplifting">Uplifting</option>
                  <option value="ambient">Ambient</option>
                  <option value="epic">Epic</option>
                  <option value="none">No Music</option>
                </select>
              </div>

              {/* Voice */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Mic className="w-4 h-4 text-red-400" />
                  Voice
                </label>
                <select
                  value={settings.voice}
                  onChange={(e) => setSettings({...settings, voice: e.target.value})}
                  className="w-full bg-black/30 border border-white/20 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="professional">Professional Male</option>
                  <option value="professional-female">Professional Female</option>
                  <option value="narrator">Documentary Narrator</option>
                  <option value="young">Young & Energetic</option>
                  <option value="none">No Voice</option>
                </select>
              </div>
            </div>

            {/* Generate Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-xl p-4 font-semibold text-lg flex items-center justify-center gap-2 transition-all"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating... {progress}%
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Documentary
                </>
              )}
            </motion.button>

            {/* Progress Bar */}
            <AnimatePresence>
              {isGenerating && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10"
                >
                  <div className="w-full bg-black/30 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Panel - Preview/Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Preview */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Play className="w-4 h-4 text-purple-400" />
                Preview
              </h3>

              <AnimatePresence mode="wait">
                {generatedVideo ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl flex items-center justify-center border border-white/20">
                      <Play className="w-16 h-16 text-white/50" />
                    </div>
                    <button className="w-full bg-green-600 hover:bg-green-500 rounded-lg p-3 font-semibold flex items-center justify-center gap-2 transition-colors">
                      <Download className="w-4 h-4" />
                      Download Video
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="aspect-video bg-black/30 rounded-xl flex items-center justify-center border border-white/10"
                  >
                    <div className="text-center p-6">
                      <Film className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Your video will appear here</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span>AI-powered script generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span>Professional voice narration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span>HD video quality (1080p)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span>Background music library</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span>Automatic subtitles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span>YouTube-ready format</span>
                </li>
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <h3 className="font-semibold mb-3 text-purple-300">💡 Pro Tips</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Be specific about your topic</li>
                <li>• Include key points to cover</li>
                <li>• Specify the target audience</li>
                <li>• Mention any specific visuals</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { label: 'Videos Created', value: '12,543' },
            { label: 'Total Watch Time', value: '847K hrs' },
            { label: 'Avg. Quality', value: '98%' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}

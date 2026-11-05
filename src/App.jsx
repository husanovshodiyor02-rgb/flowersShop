import { useState } from 'react'

const products = [
  { id: 1, emoji: '🌹', name: 'Qizil Atirgul', desc: 'Muhabbat va ehtiromning ramzi', price: 35000 },
  { id: 2, emoji: '🌷', name: 'Lola', desc: 'Bahor kayfiyatini uyingizga olib keling', price: 25000 },
  { id: 3, emoji: '🌻', name: 'Kungaboqar', desc: 'Quvonch va yorqinlik timsoli', price: 20000 },
  { id: 4, emoji: '💐', name: 'Aralash Buket', desc: 'Turli gullardan maxsus tayyorlangan', price: 75000 },
  { id: 5, emoji: '🌸', name: 'Sakura', desc: 'Nafosatning eng oliy ifodasi', price: 45000 },
  { id: 6, emoji: '🌼', name: 'Margaritka', desc: 'Soddalik va poklikning ramzi', price: 18000 },
]

function Header({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-pink-600">🌸 GulBog'</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-pink-500 transition">Bosh sahifa</a>
          <a href="#catalog" className="hover:text-pink-500 transition">Katalog</a>
          <a href="#about" className="hover:text-pink-500 transition">Biz haqimizda</a>
          <a href="#contact" className="hover:text-pink-500 transition">Aloqa</a>
        </nav>
        <button
          onClick={onCartClick}
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
        >
          🛒 Savat
          {cartCount > 0 && (
            <span className="bg-white text-pink-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-pink-50 to-rose-100 py-24 text-center"
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-7xl mb-6">💐</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Eng chiroyli gullar
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Sevganlaringizga eng go'zal sovg'ani yuboring
        </p>
        <a
          href="#catalog"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition text-lg"
        >
          Katalogni ko'rish
        </a>
      </div>
    </section>
  )
}

function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center border border-pink-50">
      <div className="text-6xl mb-4">{product.emoji}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{product.desc}</p>
      <div className="text-pink-600 font-bold text-lg mb-4">
        {product.price.toLocaleString()} so'm
      </div>
      <button
        onClick={() => onAdd(product)}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-medium transition"
      >
        Savatga qo'sh
      </button>
    </div>
  )
}

function Catalog({ onAdd }) {
  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Bizning gullar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Biz haqimizda</h2>
        <p className="text-gray-500 mb-10">
          GulBog' do'koni 2015-yildan beri Toshkentda faoliyat yuritadi.
          Biz eng yangi va chiroyli gullarni mijozlarimizga yetkazib beramiz.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '⏰', text: 'Har kuni 8:00–22:00' },
            { icon: '🚚', text: 'Toshkent bo\'ylab yetkazib berish' },
            { icon: '🎁', text: 'Maxsus qadoqlash bepul' },
          ].map((f, i) => (
            <div key={i} className="bg-pink-50 rounded-2xl p-6">
              <div className="text-4xl mb-3">{f.icon}</div>
              <p className="text-gray-600 font-medium">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    e.target.reset()
  }
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Bog'lanish</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ismingiz"
              required
              className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-400 transition"
            />
            <input
              type="tel"
              placeholder="Telefon raqamingiz"
              required
              className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-400 transition"
            />
            <textarea
              placeholder="Xabaringiz..."
              rows={4}
              className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-400 transition resize-none"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-medium transition"
            >
              Yuborish
            </button>
            {sent && (
              <p className="text-green-500 text-center font-medium">✅ Xabaringiz yuborildi!</p>
            )}
          </form>
        </div>
        <div className="flex flex-col justify-center gap-4 text-gray-600">
          <p className="text-xl font-semibold text-gray-800 mb-2">Manzil</p>
          <p>📍 Toshkent, Chilonzor tumani</p>
          <p>📞 +998 90 123 45 67</p>
          <p>📧 info@gulbog.uz</p>
          <p>⏰ Har kuni 08:00 – 22:00</p>
        </div>
      </div>
    </section>
  )
}

function CartModal({ cart, onClose, onRemove }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-end" onClick={onClose}>
      <div
        className="bg-white h-full w-full max-w-sm shadow-xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">🛒 Savat</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-400 mt-10">Savat bo'sh</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex items-center justify-between py-3 border-b">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <p className="font-medium text-gray-700">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.price.toLocaleString()} so'm × {item.qty}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-red-400 hover:text-red-600 text-lg">✕</button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="px-6 py-4 border-t">
            <div className="flex justify-between font-bold text-gray-800 text-lg mb-4">
              <span>Jami:</span>
              <span>{total.toLocaleString()} so'm</span>
            </div>
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-medium transition">
              Buyurtma berish
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <div className="font-sans text-gray-800">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <Catalog onAdd={addToCart} />
      <About />
      <Contact />
      <footer className="bg-pink-600 text-white text-center py-5 text-sm">
        © 2026 GulBog' Do'koni. Barcha huquqlar himoyalangan.
      </footer>
      {cartOpen && (
        <CartModal cart={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
      )}
    </div>
  )
}

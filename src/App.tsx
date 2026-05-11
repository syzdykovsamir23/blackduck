import { Clock3, MapPin, Phone, Star } from 'lucide-react'

const menuItems = [
  {
    name: 'Стейк Black Duck',
    description: 'Сочный говяжий стейк medium с фирменным соусом и овощами гриль.',
    price: '8 900 ₸',
    image: '/images/menu-steak.jpg',
    category: 'Горячее',
  },
  {
    name: 'Паста с трюфельным соусом',
    description: 'Домашняя паста, кремовый соус, пармезан и зелень.',
    price: '5 200 ₸',
    image: '/images/menu-pasta.jpg',
    category: 'Горячее',
  },
  {
    name: 'Салат с креветками',
    description: 'Свежий микс-салат, авокадо, креветки и цитрусовая заправка.',
    price: '4 300 ₸',
    image: '/images/menu-salad.jpg',
    category: 'Салаты',
  },
  {
    name: 'Шоколадный десерт',
    description: 'Нежный шоколадный торт с карамелью и ягодами.',
    price: '2 900 ₸',
    image: '/images/menu-dessert.jpg',
    category: 'Десерты',
  },
]

const reviews = [
  {
    author: 'Алия Н.',
    rating: 5,
    text: 'Очень уютная атмосфера, отличная подача блюд и вежливый персонал. Обязательно вернусь!',
  },
  {
    author: 'Данияр К.',
    rating: 5,
    text: 'Лучший стейк, который пробовал в Астане. Понравились коктейли и музыка по вечерам.',
  },
  {
    author: 'Мария С.',
    rating: 4,
    text: 'Красивый интерьер, блюда принесли быстро. Рекомендую для ужина с друзьями.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="relative overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Интерьер ресторана Black Duck"
          className="h-[72vh] w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-6 pb-16">
          <p className="mb-2 text-sm uppercase tracking-[0.35em] text-amber-300">Ресторан в Астане</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Black Duck</h1>
          <p className="mt-4 max-w-2xl text-stone-300 md:text-lg">
            Современная европейская кухня, уютная атмосфера и авторская подача блюд. Идеально для встреч,
            ужинов и особых событий.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14">
        <section id="menu" className="mb-16">
          <h2 className="mb-2 text-3xl font-semibold">Меню и цены</h2>
          <p className="mb-8 text-stone-400">Популярные позиции ресторана</p>
          <div className="grid gap-6 md:grid-cols-2">
            {menuItems.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/60 shadow-xl shadow-black/20"
              >
                <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
                <div className="space-y-2 p-5">
                  <p className="text-xs uppercase tracking-wider text-amber-300">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm text-stone-300">{item.description}</p>
                  <p className="pt-1 text-lg font-bold text-amber-200">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="mb-16">
          <h2 className="mb-2 text-3xl font-semibold">Отзывы гостей</h2>
          <p className="mb-8 text-stone-400">Что говорят посетители о Black Duck</p>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.author} className="rounded-2xl border border-stone-800 bg-stone-900 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-medium">{review.author}</h3>
                  <Stars count={review.rating} />
                </div>
                <p className="text-sm leading-relaxed text-stone-300">{review.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacts" className="rounded-3xl border border-stone-800 bg-stone-900 p-6 md:p-8">
          <h2 className="mb-6 text-3xl font-semibold">Контакты</h2>
          <div className="grid gap-5 text-stone-200 md:grid-cols-2">
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-300" />
                Астана, Проспект Туран, 37/9
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-300" />
                +7 (778) 322-0852
              </p>
              <p className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-amber-300" />
                Ежедневно: 12:00 – 01:00
              </p>
            </div>
            <div className="rounded-2xl border border-stone-700 bg-stone-950 p-4 text-sm text-stone-300">
              <p className="mb-3 font-medium text-stone-100">Как нас найти</p>
              <p>
                https://2gis.kz/astana/search/black%20duck/firm/70000001059834146/71.401946%2C51.130756?m=71.443112%2C51.129748%2F10.69
              </p>
              <p className="mt-4 text-amber-200">Бронирование столов желательно в вечернее время.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

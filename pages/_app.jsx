import Head from 'next/head'

import { useState, useEffect } from 'react'
import { imgModalContext, slideContext } from '../global/global-states';
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiLine, SiKakaotalk, SiWechat } from 'react-icons/si'
import Activities from '../components/Activities';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import AOS from 'aos';

import '../styles/App.scss'
import 'aos/dist/aos.css';

export default function Home() {
	const carouselItems = [
		{
			title: 'LOCAL SEAFOOD RESTAURANT',
			source: './assets/kelong.jpg'
		},
		{
			title: 'GUNUNG BINTAN TREKKING',
			source: './assets/gunung-b.jpg'
		},
		{
			title: 'MANGROVE TOUR',
			source: './assets/hutan-m.jpg'
		},
		{
			title: 'LOHAN TEMPLE',
			source: './assets/lohan.jpg'
		},
		{
			title: 'BLUE LAKE AND BINTAN DESSERT',
			source: './assets/blue-lake.jpg'
		},
		{
			title: 'BINTAN SLEEPING BUDDHA',
			source: './assets/sleeping-buddha.jpg'
		},
		{
			title: 'TRANS STUDIO GARDEN',
			source: './assets/trans-studio.jpg'
		},
		{
			title: 'WHITE SAND',
			source: './assets/white-sand.jpg'
		},
		{
			title: 'TREASURE BAY',
			source: './assets/treasure-bay.jpg'
		},
		{
			title: 'LAGOI BAY',
			source: './assets/lagoi-bay.jpg'
		},
	]
	

	const [ currentSlide, setCurrentSlide ] = useState(0)
	const [ modal, setModal ] = useState(false)
	const [ name, setName ] = useState('')
	const [ mobile, setMobile ] = useState('')
	const [ tujuan, setTujuan ] = useState('')
	const [ tanggal, setTanggal ] = useState('')
	const [ orang, setOrang ] = useState('')

	useEffect(() => {
		AOS.init()
	},[])

	const handleSubmit = () => {
		let templateWA = "===%20Booking%20===%0ANama:%20"+name+"%0ANo.Hp:%20"+mobile+"%0ATujuan:%20"+tujuan+"%0ATanggal:%20"+tanggal.toString()+"%0AJumlah%20Orang:%20"+orang.toString()
		console.log(templateWA)
		window.open("https://wa.me/+6281277327309?text="+templateWA)
	}
	return (
		<>
			<Head>
				<title>Bintan Tour Travel and Taxi - Bintan, Kepulauan Riau</title>
				<meta name="description" content="Bintan Tour Travel and Taxi menyediakan Jasa tour, travel, dan taxi di Bintan, Kepulauan Riau dengan harga yang terjangkau"></meta>
				<meta name="keyword" content='bintan, tour, travel, jasa travel, taxi, murah, kepulauan riau, batam, jalan-jalan, wisata, lagoi, terjangkau, bintan taxi, tour bintan, kawasan bintan, lohan temple, bintan lohan, booking, book now, bintan sleeping buddha, sleeping buddha, gunung bintan, lohan,temple, bintan lohan, seafood, lagoi, bintan kepulauan, travelling, bintan snorkeling'></meta>
				<meta property="og:url" content="https://www.bintanttourtravelandtaxi.com/"></meta>
				<meta property="og:type" content="website"></meta>
				<meta property="og:site_name" content="Bintan Tour Travel and Taxi - Paket Tour Bintan Terjangkau dan Termurah"></meta>
				<meta property="og:locale" content="id_ID"></meta>
				<link rel="canonical" href="https://www.bintanttourtravelandtaxi.com/"></link>
				<meta name="google-site-verification" content="ZSIXBajhhfEzZbRal7EatpWGPAIUA100WoB2u5JSU7Y" />
			</Head>
			<slideContext.Provider value={{ currentSlide, setCurrentSlide }}>
				<imgModalContext.Provider value={{ modal, setModal }}>
					<h1 className='hidden'>Bintan Tour, Travel, and Taxi</h1>
					<Modal></Modal>
					<div className="navbar">
						<Navbar></Navbar>
					</div>
				<div className="content">
					<div className="landing">
						<div className="landing-bg">
							<div className="darken"></div>
							<img src={carouselItems[currentSlide].source} alt={carouselItems[currentSlide].title} />
						</div>
						<div className="landing-content" data-aos='fade-up'>
							<div className="left">
								<h1>BINTAN</h1>
								<h2>Travel through Bintan with excitements!</h2>
								<a href="#activities" className='orange-btn'><h3>Explore {'>'}</h3></a>
							</div>
							<div className="right">
								<Carousel
									items={carouselItems}
								></Carousel>
							</div>
						</div>
					</div>
					<div className='about'>
						<div className="content">
							<div className='left'>
								<img src="./assets/logo.png" alt="" />
							</div>
							<div className="right">
								<h1>About Bintan Tour, Travel, and Taxi</h1>
								<p>Bintan tour travel and taxi adalah perusahaan bergerak di bidang pariwisata menyediakan jasa taxi dan paket travel
									Bintan tour travel and taxi sangat membantu traveler untuk traveling di kawasan Bintan karena Bintan tour travel and taxi mengenal semua wilayah kawasan Bintan ,anda bisa meminta rekomendasi apa saja untuk memudahkan anda karena Bintan tour travel and taxi mengenal semua tentang wilayah kawasan Bintan .
									Telah banyak client kami dari berbagai manca negara seperti Singapore terutama karena dekat dengan kawasan Bintan ,China, Amerika, India, Jerman, Malaysia, yang menggunakan jasa travel and taxi kami.
									Jika anda ingin traveling di kawasan Bintan dengan harga yang murah dan fasilitas yang nyaman bisa menghubungi kami di bintanttourtravelandtaxi.com
								</p>
							</div>
						</div>
					</div>
					<div className="activities" id="activities" >
						<h2 data-aos="fade-right">Bintan Activities and Tourist Attaction</h2>
						<Activities></Activities>
					</div>
					<div className="booking" id="book">
						<div className="booking-content">
							<div className="booking-title" data-aos="fade-right">
								<div className="title">
									<h2>
										Travelling to <br/> Bintan ?
									</h2>
									<p>
										Book Now!
									</p>
								</div>
								<div className="contacts">
									<div className="contact">
										<div className="contact-bubble">
											<MdEmail className='icon'></MdEmail>
											<h3>Email</h3>
										</div>
										<p>sinagamrd6@gmail.com</p>
									</div>
									<div className="contact">
										<div className="contact-bubble">
											<FaWhatsapp className='icon'></FaWhatsapp>
											<SiLine className='icon'></SiLine>
											<SiKakaotalk className='icon'></SiKakaotalk>
											<SiWechat className='icon'></SiWechat>
										</div>
										<p>+62-812-7732-7309</p>
									</div>
								</div>
							</div>
							<div className="booking-part">
								<div data-aos='fade-up' className="car">
									<img src="assets/car.png" alt=""/>
								</div>
								<div className="booking-form">
									<h2 data-aos='fade-right'>Booking</h2>
									<input data-aos='fade-right' type="text" placeholder='Nama' onChange={(e) => {setName(e.target.value)}}/> 
									<input data-aos='fade-right' type="text" placeholder='No. Hp' onChange={(e) => {setMobile(e.target.value)}}/>
									<input data-aos='fade-right' type="text" placeholder='Lokasi Tujuan' onChange={(e) => {setTujuan(e.target.value)}}/>
									<input data-aos='fade-right' type="date" placeholder='Tanggal' onChange={(e) => {setTanggal(e.target.value)}}/>
									<input data-aos='fade-right' type="number" placeholder='Jumlah Orang' onChange={(e) => {setOrang(e.target.value)}}/> 
									<h3 data-aos='fade-right' className='blue-btn' onClick={() => handleSubmit()}>Book via WA</h3> 
								</div>
							</div>
						</div>
					</div>
					<footer className='footer'>
						<p>Bintan Taxi and Travel © 2022</p>
					</footer>
				</div>
			</imgModalContext.Provider>
			</slideContext.Provider>
		</>
	)
}

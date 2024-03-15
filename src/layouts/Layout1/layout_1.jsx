
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout_1=({children})=>{
	return(
	<div>
		<Header />
			{children}
		<Footer/>
	</div>
	)
}
export default Layout_1
import ButtonLink from './ButtonLink.jsx'
import logo from '../assets/logo.svg'

function Navbar({ links, whatsapp }) {
    return (
        <nav className="w-full text-gray-300 bg-(--primary)">
            <div className="mx-auto max-w-10/12 py-6 flex items-center justify-between">
                <a href="#inicio" className="flex items-center gap-3 text-white">
                    <img src={logo} alt="" aria-hidden="true" className="h-10 w-12 object-contain" />
                    <span className="text-xl">
                        <strong className="font-bold">TECNO</strong>{' '}
                        <span className="font-normal">Soluciones</span>
                    </span>
                </a>
                <div className="flex items-center gap-8">
                    {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a>)}
                    <ButtonLink href={whatsapp}>WhatsApp</ButtonLink>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
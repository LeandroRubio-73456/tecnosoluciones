import { MonitorCog, BrushCleaning, SearchCheck } from 'lucide-react'
import wave from '../assets/wave.svg'
import ButtonLink from './ButtonLink.jsx'
import ServiceCard from './ServiceCard.jsx'

function Hero({ whatsapp }) {
    const services = [
        {
            icon: MonitorCog,
            title: 'Instalación y configuración',
            description: 'Sistema, programas y ajustes a tu medida.',
            variant: 'blue',
        },
        {
            icon: SearchCheck,
            title: 'Diagnóstico y reparación',
            description: 'Encontramos la falla y la reparamos.',
            variant: 'green',
        },
        {
            icon: BrushCleaning,
            title: 'Mantenimiento preventivo',
            description: 'Limpieza y revisión para que tu equipo dure más.',
            variant: 'red',
        },
    ]

    return (
        <nav className="relative isolate w-full text-gray-300 bg-(--primary)">
            <div className="relative z-10 mx-auto max-w-10/12 py-12 flex items-center justify-between">
                <div className="flex flex-col gap-8 max-w-5/12">
                    <h1 className="text-6xl font-bold">Tu equipo arreglado y con garantía.</h1>
                    <p className="text-2xl">Servicio técnico en Quito para PCs, laptops e impresoras: diagnóstico, reparación, mantenimiento, instalación y configuración. También vendemos equipos y armamos el combo que necesites</p>
                    <div className="flex gap-8">
                        <ButtonLink href={whatsapp}>Escribir por WhatsApp</ButtonLink>
                        <ButtonLink href="#combos" variant="secondary">Ver Combos</ButtonLink>
                    </div>
                </div>
                <div className="flex flex-col gap-8 max-w-5/12">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
            <div
                aria-hidden="true"
                className="wave-scroll pointer-events-none relative z-0 -mt-20 h-36 w-full bg-repeat-x opacity-20"
                style={{
                    backgroundImage: `url("${wave}")`,
                    backgroundSize: '300px auto',
                    '--wave-tile-width': '300px',
                }}
            />
        </nav>
    )
}
export default Hero
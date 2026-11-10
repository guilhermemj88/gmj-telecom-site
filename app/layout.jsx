import './globals.css';

export const metadata = {
  metadataBase: new URL('https://gmjtelecom.com.br'),
  title: 'GMJ Telecom | Engenharia, Consultoria e Soluções para ISPs',
  description: 'Consultoria especializada em redes de provedores de internet: BGP, IPv6, CGNAT, MPLS, monitoramento, servidores e infraestrutura de telecomunicações. Belo Horizonte, MG.',
  keywords: ['consultoria ISP', 'engenharia de telecomunicações', 'BGP', 'CGNAT', 'IPv6', 'MPLS', 'Zabbix', 'Belo Horizonte', 'GMJ Telecom'],
  openGraph: { title: 'GMJ Telecom | Engenharia que conecta', description: 'Infraestrutura, redes IP e soluções inteligentes para provedores e empresas.', type: 'website', locale: 'pt_BR', images: ['/social-preview.svg'] },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

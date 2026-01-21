import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
            <h2 className="text-2xl font-bold text-red-800">Página não encontrada</h2>
            <p className="text-gray-600">Não foi possível encontrar o recurso solicitado.</p>
            <Link href="/" className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
                Voltar para o Início
            </Link>
        </div>
    )
}

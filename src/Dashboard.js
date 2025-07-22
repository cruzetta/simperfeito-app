import React, { useState } from 'react';

// --- Ícones ---
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
);

// --- COMPONENTES DO PAINEL ---

// Dados de exemplo para a lista de convidados
const initialGuests = [
    { id: 1, name: 'João da Silva', phone: '5511999999999', status: 'Pendente' },
    { id: 2, name: 'Maria Oliveira', phone: '5521988888888', status: 'Confirmado' },
    { id: 3, name: 'Pedro Souza', phone: '5531977777777', status: 'Convite Enviado' },
    { id: 4, name: 'Ana Costa', phone: '5541966666666', status: 'Recusado' },
];

function GuestManagement() {
    // IMPORTANTE: Altere esta URL para o link real do site do casamento
    const WEDDING_SITE_URL = 'https://simperfeito.com/casamento-exemplo';

    const [guests, setGuests] = useState(initialGuests);
    const [newGuestName, setNewGuestName] = useState('');
    const [newGuestPhone, setNewGuestPhone] = useState('');

    const handleAddGuest = (e) => {
        e.preventDefault();
        if (newGuestName.trim() === '' || newGuestPhone.trim() === '') return;

        const newGuest = {
            id: Date.now(),
            name: newGuestName,
            phone: newGuestPhone.replace(/\D/g, ''), // Remove non-digit characters
            status: 'Pendente',
        };
        setGuests([...guests, newGuest]);
        setNewGuestName('');
        setNewGuestPhone('');
    };

    const handleRemoveGuest = (id) => {
        setGuests(guests.filter(guest => guest.id !== id));
    };
    
    const handleSendInvite = (guest) => {
        const message = encodeURIComponent(`Olá ${guest.name}! Você está convidado(a) para o nosso casamento. Para mais detalhes e confirmar sua presença, acesse: ${WEDDING_SITE_URL}`);
        const whatsappUrl = `https://wa.me/${guest.phone}?text=${message}`;
        window.open(whatsappUrl, '_blank');

        setGuests(guests.map(g => 
            g.id === guest.id ? { ...g, status: 'Convite Enviado' } : g
        ));
    };

    const handleSendAllInvites = () => {
        const pendingGuests = guests.filter(g => g.status === 'Pendente');
        if (pendingGuests.length === 0) {
            alert('Não há convites pendentes para enviar.');
            return;
        }
        
        setGuests(guests.map(g => 
            g.status === 'Pendente' ? { ...g, status: 'Convite Enviado' } : g
        ));
        alert(`${pendingGuests.length} convites foram marcados como "Enviado". Em um aplicativo real, isso iniciaria um processo de envio em massa.`);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Confirmado': return 'bg-green-100 text-green-800';
            case 'Pendente': return 'bg-yellow-100 text-yellow-800';
            case 'Convite Enviado': return 'bg-blue-100 text-blue-800';
            case 'Recusado': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const confirmedCount = guests.filter(g => g.status === 'Confirmado').length;
    const pendingCount = guests.filter(g => g.status === 'Pendente' || g.status === 'Convite Enviado').length;

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Lista de Convidados</h2>
                <button 
                  onClick={handleSendAllInvites}
                  className="mt-4 md:mt-0 flex items-center justify-center bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                >
                    <SendIcon /> <span className="ml-2">Enviar para todos pendentes</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500">Total de Convidados</h3>
                    <p className="text-2xl font-bold text-gray-800">{guests.length}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500">Confirmados</h3>
                    <p className="text-2xl font-bold text-green-600">{confirmedCount}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500">Pendentes / Não Responderam</h3>
                    <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Adicionar Novo Convidado</h3>
                <form onSubmit={handleAddGuest} className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Nome completo"
                        value={newGuestName}
                        onChange={(e) => setNewGuestName(e.target.value)}
                        className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    />
                    <input
                        type="tel"
                        placeholder="Celular (Ex: 5511999999999)"
                        value={newGuestPhone}
                        onChange={(e) => setNewGuestPhone(e.target.value)}
                        className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    />
                    <button type="submit" className="flex items-center justify-center bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300">
                        <PlusIcon /> Adicionar
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Convidado</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {guests.map(guest => (
                                <tr key={guest.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{guest.name}</div>
                                        <div className="text-sm text-gray-500">{guest.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(guest.status)}`}>
                                            {guest.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button onClick={() => handleSendInvite(guest)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full" title="Enviar Convite via WhatsApp">
                                                <SendIcon />
                                            </button>
                                            <button onClick={() => handleRemoveGuest(guest.id)} className="p-2 text-red-500 hover:bg-red-100 rounded-full" title="Remover Convidado">
                                                <TrashIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Componente Placeholder para outras seções do painel
function PlaceholderSection({ title }) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-500">Esta seção está em desenvolvimento. Em breve, você poderá gerenciar sua {title.toLowerCase()} por aqui!</p>
            </div>
        </div>
    );
}

export default function Dashboard({ onLogout }) {
    const [activeTab, setActiveTab] = useState('guests');

    const renderContent = () => {
        switch (activeTab) {
            case 'guests':
                return <GuestManagement />;
            case 'gifts':
                return <PlaceholderSection title="Lista de Presentes" />;
            case 'overview':
                return <PlaceholderSection title="Visão Geral" />;
            case 'suppliers':
                return <PlaceholderSection title="Fornecedores" />;
            default:
                return <GuestManagement />;
        }
    };

    const NavLink = ({ tabName, children }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`w-full text-left flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700 ${activeTab === tabName ? 'bg-gray-200 text-gray-800 font-semibold' : ''}`}
        >
            {children}
        </button>
    );

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-white border-r">
                <div className="flex items-center justify-center h-16 border-b">
                    <span className="text-xl font-bold text-gray-800 font-display">Sim, Perfeito</span>
                </div>
                <div className="flex flex-col flex-grow">
                    <nav className="flex-grow px-4 pt-4">
                        <NavLink tabName="overview">
                           <span className="mx-4 font-medium">Visão Geral</span>
                        </NavLink>
                        <NavLink tabName="guests">
                           <span className="mx-4 font-medium">Lista de Convidados</span>
                        </NavLink>
                        <NavLink tabName="gifts">
                           <span className="mx-4 font-medium">Lista de Presentes</span>
                        </NavLink>
                         <NavLink tabName="suppliers">
                           <span className="mx-4 font-medium">Fornecedores</span>
                        </NavLink>
                    </nav>
                    <div className="p-4 border-t border-gray-200">
                       <button onClick={onLogout} className="w-full flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700">
                         <span className="mx-4 font-medium">Sair</span>
                       </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-y-auto">
                 <header className="flex items-center justify-between h-16 px-6 bg-white border-b md:hidden">
                    <span className="text-xl font-bold text-gray-800 font-display">Sim, Perfeito</span>
                    {/* Aqui você pode adicionar um botão de menu para mobile */}
                </header>
                <main className="p-4 sm:p-6 md:p-8">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}

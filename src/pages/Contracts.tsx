import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Plus, Search, Filter } from 'lucide-react';

export function Contracts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const contracts = [
    {
      id: '1',
      title: 'Contrato de Prestação de Serviços - TechCorp',
      status: 'SIGNED',
      createdAt: '2024-01-15',
      signatories: ['João Silva', 'Maria Santos'],
    },
    {
      id: '2',
      title: 'Acordo de Confidencialidade - StartupXYZ',
      status: 'SENT',
      createdAt: '2024-01-14',
      signatories: ['Pedro Costa'],
    },
    {
      id: '3',
      title: 'Contrato de Compra e Venda - Equipamentos',
      status: 'DRAFT',
      createdAt: '2024-01-13',
      signatories: [],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SIGNED':
        return 'bg-green-100 text-green-800';
      case 'SENT':
        return 'bg-yellow-100 text-yellow-800';
      case 'DRAFT':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'SIGNED':
        return 'Assinado';
      case 'SENT':
        return 'Enviado';
      case 'DRAFT':
        return 'Rascunho';
      default:
        return status;
    }
  };

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || contract.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contratos</h1>
          <p className="mt-1 text-sm text-gray-600">
            Gerencie todos os seus contratos em um só lugar
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/editor"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Novo Contrato
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Buscar contratos
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite o nome do contrato..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por status
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="status"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">Todos os status</option>
                  <option value="DRAFT">Rascunho</option>
                  <option value="SENT">Enviado</option>
                  <option value="SIGNED">Assinado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contracts List */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {filteredContracts.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum contrato encontrado</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Tente ajustar os filtros de busca.'
                  : 'Comece criando seu primeiro contrato.'
                }
              </p>
              {!searchTerm && statusFilter === 'all' && (
                <div className="mt-6">
                  <Link
                    to="/editor"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Primeiro Contrato
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {filteredContracts.map((contract) => (
                  <li key={contract.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <FileText className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {contract.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          Criado em {new Date(contract.createdAt).toLocaleDateString('pt-BR')}
                        </p>
                        {contract.signatories.length > 0 && (
                          <p className="text-xs text-gray-400">
                            Signatários: {contract.signatories.join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                          {getStatusText(contract.status)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
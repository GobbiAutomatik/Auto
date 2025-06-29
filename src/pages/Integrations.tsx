import React, { useState } from 'react';
import { Mail, CreditCard, MessageCircle, Calendar, Settings, Check, X } from 'lucide-react';

export function Integrations() {
  const [activeTab, setActiveTab] = useState('email');

  const integrations = [
    {
      id: 'email',
      name: 'Email (SMTP)',
      icon: Mail,
      description: 'Configure SMTP para envio de emails automáticos',
      status: 'connected',
      color: 'blue'
    },
    {
      id: 'stripe',
      name: 'Stripe',
      icon: CreditCard,
      description: 'Processamento de pagamentos e assinaturas',
      status: 'disconnected',
      color: 'purple'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      description: 'Notificações via WhatsApp Business',
      status: 'disconnected',
      color: 'green'
    },
    {
      id: 'google',
      name: 'Google Workspace',
      icon: Calendar,
      description: 'Integração com Gmail, Calendar e Drive',
      status: 'disconnected',
      color: 'red'
    }
  ];

  const getStatusIcon = (status: string) => {
    return status === 'connected' ? (
      <Check className="h-4 w-4 text-green-600" />
    ) : (
      <X className="h-4 w-4 text-gray-400" />
    );
  };

  const getStatusText = (status: string) => {
    return status === 'connected' ? 'Conectado' : 'Desconectado';
  };

  const getStatusColor = (status: string) => {
    return status === 'connected' 
      ? 'text-green-600' 
      : 'text-gray-500';
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Integrações</h1>
        <p className="mt-1 text-sm text-gray-600">
          Configure integrações para automatizar seu fluxo de trabalho
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Integration List */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Integrações Disponíveis</h3>
              <div className="space-y-3">
                {integrations.map((integration) => {
                  const Icon = integration.icon;
                  return (
                    <button
                      key={integration.id}
                      onClick={() => setActiveTab(integration.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-md border-2 transition-colors ${
                        activeTab === integration.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon className={`h-5 w-5 text-${integration.color}-600 mr-3`} />
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900">{integration.name}</p>
                          <p className={`text-xs ${getStatusColor(integration.status)}`}>
                            {getStatusText(integration.status)}
                          </p>
                        </div>
                      </div>
                      {getStatusIcon(integration.status)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Configuration */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              {activeTab === 'email' && (
                <div>
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-medium text-gray-900">Configuração SMTP</h3>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Servidor SMTP
                      </label>
                      <input
                        type="text"
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="smtp.gmail.com"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Porta
                        </label>
                        <input
                          type="number"
                          className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="587"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Segurança
                        </label>
                        <select className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                          <option>TLS</option>
                          <option>SSL</option>
                          <option>Nenhuma</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="seu-email@gmail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Senha
                      </label>
                      <input
                        type="password"
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="flex space-x-3">
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Testar Conexão
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Salvar Configuração
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'stripe' && (
                <div>
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-medium text-gray-900">Configuração Stripe</h3>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Modo
                      </label>
                      <select className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
                        <option>Teste</option>
                        <option>Produção</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Chave Pública
                      </label>
                      <input
                        type="text"
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="pk_test_..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Chave Secreta
                      </label>
                      <input
                        type="password"
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="sk_test_..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Webhook Secret
                      </label>
                      <input
                        type="password"
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="whsec_..."
                      />
                    </div>
                    <div className="flex space-x-3">
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Testar Conexão
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                      >
                        Salvar Configuração
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'whatsapp' && (
                <div>
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-medium text-gray-900">Configuração WhatsApp</h3>
                  </div>
                  <div className="text-center py-8">
                    <MessageCircle className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Em breve</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      A integração com WhatsApp estará disponível em breve.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'google' && (
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="text-lg font-medium text-gray-900">Configuração Google Workspace</h3>
                  </div>
                  <div className="text-center py-8">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Em breve</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      A integração com Google Workspace estará disponível em breve.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
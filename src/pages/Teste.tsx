import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Clock, CheckCircle, FileText } from 'lucide-react';

export function Teste() {
  const [isStarting, setIsStarting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleStartTrial = async () => {
    setIsStarting(true);
    
    // Create a test user
    const testUser = {
      id: 'test-user-' + Date.now(),
      email: 'teste@autocontrato.com',
      name: 'Usuário de Teste',
      role: 'ADMIN' as const,
      account_id: 'test-account'
    };

    // Store test user data
    localStorage.setItem('test_user', JSON.stringify(testUser));
    localStorage.setItem('test_trial_start', Date.now().toString());
    
    // Simulate login
    try {
      await login(testUser.email, 'test-password');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error starting trial:', error);
    } finally {
      setIsStarting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <FileText className="mx-auto h-16 w-16 text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Teste Grátis por 2 Horas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experimente todas as funcionalidades do AutoContrato sem compromisso. 
            Não é necessário cartão de crédito.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2 Horas Completas</h3>
              <p className="text-gray-600">
                Tempo suficiente para explorar todas as funcionalidades da plataforma.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Acesso Completo</h3>
              <p className="text-gray-600">
                Teste todas as funcionalidades, incluindo IA, integrações e relatórios.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <FileText className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dados Salvos</h3>
              <p className="text-gray-600">
                Seus contratos e configurações ficam salvos durante o período de teste.
              </p>
            </div>
          </div>
        </div>

        {/* What you can test */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            O que você pode testar:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">📝 Criação de Contratos</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Editor avançado com variáveis dinâmicas</li>
                <li>• Templates profissionais prontos</li>
                <li>• Pré-visualização em tempo real</li>
                <li>• Assinatura eletrônica</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🤖 Inteligência Artificial</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Assistente jurídico especializado</li>
                <li>• Otimização automática de contratos</li>
                <li>• Revisão de compliance</li>
                <li>• Tradução contextual</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">👥 Gestão de Equipe</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Controle de usuários e permissões</li>
                <li>• Colaboração em tempo real</li>
                <li>• Histórico de alterações</li>
                <li>• Notificações automáticas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🔌 Integrações</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Stripe para pagamentos</li>
                <li>• SMTP para e-mails automáticos</li>
                <li>• WhatsApp Business (em breve)</li>
                <li>• Google Workspace (em breve)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleStartTrial}
            disabled={isStarting}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isStarting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Iniciando teste...
              </>
            ) : (
              <>
                <Clock className="h-5 w-5 mr-3" />
                Começar Teste Grátis Agora
              </>
            )}
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Sem cartão de crédito • Sem compromisso • Acesso imediato
          </p>
        </div>
      </div>
    </div>
  );
}
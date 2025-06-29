import React from 'react';
import { Building2, Package, Users, Settings, BarChart3, Shield } from 'lucide-react';

export function SuperAdmin() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Super Admin</h1>
        <p className="mt-1 text-sm text-gray-600">
          Configurações globais e gerenciamento de todas as contas
        </p>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Contas Ativas</dt>
                  <dd className="text-lg font-medium text-gray-900">24</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Usuários</dt>
                  <dd className="text-lg font-medium text-gray-900">156</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Planos Ativos</dt>
                  <dd className="text-lg font-medium text-gray-900">3</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Receita Mensal</dt>
                  <dd className="text-lg font-medium text-gray-900">R$ 12.5k</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Management Sections */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Account Management */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              <Building2 className="h-5 w-5 inline mr-2" />
              Gerenciar Contas
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="text-sm font-medium text-gray-900">TechCorp Solutions</p>
                  <p className="text-xs text-gray-500">Plano Empresarial • 12 usuários</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Ativo
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="text-sm font-medium text-gray-900">Silva & Associados</p>
                  <p className="text-xs text-gray-500">Plano Professional • 5 usuários</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Ativo
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="text-sm font-medium text-gray-900">João Silva</p>
                  <p className="text-xs text-gray-500">Plano Básico • 1 usuário</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Trial
                </span>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-500">
                Ver todas as contas →
              </button>
            </div>
          </div>
        </div>

        {/* System Configuration */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              <Settings className="h-5 w-5 inline mr-2" />
              Configurações do Sistema
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <div className="flex items-center">
                  <Package className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Gerenciar Planos</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Categorias Globais</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <div className="flex items-center">
                  <Settings className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Integrações Globais</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Analytics Globais</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
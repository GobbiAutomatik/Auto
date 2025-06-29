import React, { useState } from 'react';
import { Save, Send, Eye, FileText } from 'lucide-react';

export function Editor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState('editor');

  const handleSave = () => {
    console.log('Saving contract:', { title, content, variables });
    // Here you would save to your backend
  };

  const handleSend = () => {
    console.log('Sending contract for signature:', { title, content, variables });
    // Here you would send the contract
  };

  const extractVariables = (text: string) => {
    const regex = /\{\{([^}]+)\}\}/g;
    const matches = text.match(regex);
    if (matches) {
      const newVariables: Record<string, string> = {};
      matches.forEach(match => {
        const varName = match.replace(/[{}]/g, '');
        if (!variables[varName]) {
          newVariables[varName] = '';
        }
      });
      setVariables(prev => ({ ...prev, ...newVariables }));
    }
  };

  const handleContentChange = (value: string) => {
    setContent(value);
    extractVariables(value);
  };

  const renderPreview = () => {
    let preview = content;
    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
      preview = preview.replace(regex, value || `{{${key}}}`);
    });
    return preview;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Editor de Contratos</h1>
        <p className="mt-1 text-sm text-gray-600">
          Crie e edite seus contratos com facilidade
        </p>
      </div>

      {/* Header with actions */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 min-w-0">
              <input
                type="text"
                placeholder="Título do contrato..."
                className="block w-full border-0 p-0 text-lg font-medium placeholder-gray-500 focus:ring-0 focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-4 flex space-x-3 sm:mt-0 sm:ml-4">
              <button
                onClick={handleSave}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar
              </button>
              <button
                onClick={handleSend}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('editor')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'editor'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Editor
            </button>
            <button
              onClick={() => setActiveTab('variables')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'variables'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Variáveis ({Object.keys(variables).length})
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'preview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Eye className="h-4 w-4 inline mr-2" />
              Pré-visualização
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'editor' && (
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Conteúdo do Contrato
              </label>
              <textarea
                id="content"
                rows={20}
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Digite o conteúdo do seu contrato aqui...

Você pode usar variáveis como:
- {{nome_cliente}}
- {{valor_contrato}}
- {{data_assinatura}}

Exemplo:
Este contrato é celebrado entre {{nome_empresa}} e {{nome_cliente}}, pelo valor de {{valor_contrato}}, a ser assinado em {{data_assinatura}}."
                value={content}
                onChange={(e) => handleContentChange(e.target.value)}
              />
              <p className="mt-2 text-sm text-gray-500">
                Use variáveis no formato {`{{nome_variavel}}`} para criar campos dinâmicos.
              </p>
            </div>
          )}

          {activeTab === 'variables' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Variáveis do Contrato</h3>
              {Object.keys(variables).length === 0 ? (
                <p className="text-gray-500">
                  Nenhuma variável encontrada. Digite variáveis no formato {`{{nome_variavel}}`} no editor para que apareçam aqui.
                </p>
              ) : (
                <div className="space-y-4">
                  {Object.entries(variables).map(([key, value]) => (
                    <div key={key}>
                      <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">
                        {key}
                      </label>
                      <input
                        type="text"
                        id={key}
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder={`Digite o valor para ${key}`}
                        value={value}
                        onChange={(e) => setVariables(prev => ({ ...prev, [key]: e.target.value }))}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'preview' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Pré-visualização do Contrato</h3>
              <div className="border border-gray-200 rounded-md p-6 bg-gray-50">
                {title && (
                  <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {title}
                  </h2>
                )}
                <div className="whitespace-pre-wrap text-gray-700">
                  {renderPreview() || 'Digite o conteúdo do contrato no editor para ver a pré-visualização aqui.'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
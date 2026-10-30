"use client";

import { useState } from "react";
import {
  Activity, Bell, Box, ChevronDown, CircleHelp, ClipboardList, Command,
  Headphones, LayoutDashboard, MessageCircle, Package, Search, Settings,
  ShoppingBag, Users, Wifi, WifiOff, ArrowUpRight, Menu, X
} from "lucide-react";

const navigation = [
  { label: "Visão geral", icon: LayoutDashboard },
  { label: "Conversas", icon: MessageCircle, count: "iZap" },
  { label: "Clientes", icon: Users },
  { label: "Pedidos", icon: ShoppingBag },
  { label: "Produtos e estoque", icon: Package },
  { label: "Rastreamento", icon: Box },
  { label: "Relatórios", icon: Activity }
];

export default function Home() {
  const [active, setActive] = useState("Visão geral");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="shell">
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">P</div>
          <div><strong>PAIVA PRATAS</strong><span>CENTRAL DE ATENDIMENTO</span></div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Fechar menu"><X size={18}/></button>
        </div>
        <div className="workspace"><span className="workspace-dot"/> Operação principal <ChevronDown size={14}/></div>
        <div className="nav-caption">MENU PRINCIPAL</div>
        <nav>
          {navigation.map(({ label, icon: Icon, count }) => (
            <button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => { setActive(label); setMobileOpen(false); }}>
              <Icon size={18}/><span>{label}</span>{count && <small>{count}</small>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="nav-caption">SISTEMA</div>
          <button className="nav-item" onClick={() => setActive("Configurações")}><Settings size={18}/><span>Configurações</span></button>
          <button className="nav-item" onClick={() => setActive("Ajuda")}><CircleHelp size={18}/><span>Ajuda e suporte</span></button>
          <div className="profile">
            <div className="avatar">PP</div><div className="profile-copy"><strong>Paiva Pratas</strong><span>Administrador</span></div><ChevronDown size={15}/>
          </div>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Abrir menu"><Menu/></button>
          <div className="breadcrumb">Painel <span>/</span> <strong>{active}</strong></div>
          <div className="top-actions"><div className="search"><Search size={16}/><span>Buscar no painel</span><kbd>⌘ K</kbd></div><button className="icon-button" aria-label="Notificações"><Bell size={18}/><i/></button><div className="top-avatar">PP</div></div>
        </header>

        <div className="content">
          <div className="welcome-row"><div><div className="eyebrow">PAINEL ADMINISTRATIVO</div><h1>{active === "Visão geral" ? "Visão geral" : active}</h1><p>Acompanhe sua operação e mantenha tudo organizado em um só lugar.</p></div><div className="date-chip">PAINEL EM CONFIGURAÇÃO</div></div>

          <div className="integration-banner">
            <div className="integration-icon"><MessageCircle size={20}/></div>
            <div className="integration-copy"><strong>Integração com iZap</strong><span>WhatsApp conectado no iZap. A sincronização com este painel ainda precisa ser configurada.</span></div>
            <div className="connection-state"><span className="state-dot"/> Conexão do painel pendente</div>
          </div>

          <div className="section-heading"><div><h2>Resumo da operação</h2><p>Os indicadores serão preenchidos quando as fontes de dados forem conectadas.</p></div><button className="outline-button"><ClipboardList size={15}/> Ver atividade</button></div>

          <div className="stats-grid">
            {[
              { label: "Conversas abertas", value: "—", note: "Aguardando integração", icon: MessageCircle },
              { label: "Clientes cadastrados", value: "—", note: "Aguardando base de clientes", icon: Users },
              { label: "Pedidos em andamento", value: "—", note: "Aguardando central de pedidos", icon: ShoppingBag },
              { label: "Vendas confirmadas", value: "—", note: "Somente pagamentos confirmados", icon: Activity }
            ].map(({ label, value, note, icon: Icon }) => <article className="stat-card" key={label}><div className="stat-top"><span>{label}</span><Icon size={18}/></div><div className="stat-value">{value}</div><div className="stat-note">{note}</div></article>)}
          </div>

          <div className="lower-grid">
            <section className="panel-card">
              <div className="panel-title"><div><h2>Atendimentos recentes</h2><p>As conversas aparecerão aqui após a integração.</p></div><button className="text-button">Ver conversas <ArrowUpRight size={14}/></button></div>
              <div className="empty-state"><div className="empty-icon"><Headphones size={23}/></div><strong>Nenhuma conversa sincronizada</strong><span>O painel ainda não está recebendo eventos do iZap.</span></div>
            </section>
            <section className="panel-card">
              <div className="panel-title"><div><h2>Central de pedidos</h2><p>Acompanhamento de vendas</p></div><ShoppingBag size={18}/></div>
              <div className="order-empty"><div className="order-icon"><Package size={20}/></div><div><strong>Aguardando pedidos</strong><span>Os pedidos reais serão exibidos aqui.</span></div></div>
              <div className="order-footer"><span>Status da operação</span><strong><span className="state-dot muted"/> Em configuração</strong></div>
            </section>
          </div>

          <section className="checklist-card">
            <div className="checklist-head"><div><div className="eyebrow">PRÓXIMOS PASSOS</div><h2>Preparando sua central</h2></div><span>ETAPA 1 DE 4</span></div>
            <div className="progress"><i/></div>
            <div className="steps">
              <div className="step done"><span>✓</span><div><strong>Repositório criado</strong><small>Projeto versionado no GitHub</small></div></div>
              <div className="step current"><span>2</span><div><strong>Estrutura do painel</strong><small>Interface inicial criada</small></div></div>
              <div className="step"><span>3</span><div><strong>Banco e autenticação</strong><small>Proteção dos dados e usuários</small></div></div>
              <div className="step"><span>4</span><div><strong>Integração iZap</strong><small>API e webhooks oficiais</small></div></div>
            </div>
          </section>
          <footer>PAIVA PRATAS <span>•</span> CENTRAL DE ATENDIMENTO <span className="footer-right">Ambiente inicial · Sem dados reais conectados</span></footer>
        </div>
      </section>
    </main>
  );
}

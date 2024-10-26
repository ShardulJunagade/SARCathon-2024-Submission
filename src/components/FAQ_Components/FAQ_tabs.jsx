import './FAQ_tabs.css'

const FAQ_tabs = ({tabs, setActiveTab, activeTab}) => {
    return (
        <div className="faq-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active-faq-tab' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
}

export default FAQ_tabs;
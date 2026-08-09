const stages = [
  {
    title: 'Stage 0 · 學習系統', months: '現在開始', items: [
      ['說得清楚目標職群', '不用看筆記，2 分鐘講清楚 Associate SA / Solutions Engineer 在做什麼、為什麼不是一般 SWE。'],
      ['建立錯誤日誌', '完成至少 5 筆「錯在哪 → 為什麼 → 正確模型 → 下次怎麼測」。'],
      ['完成一次 25 分鐘刻意練習', '有單一目標、先測、失敗點、回饋、隔天重測。'],
      ['隔天重測成功', '隔 24 小時，不看原答案，完成昨天失敗的變化題。']
    ]
  },
  {
    title: 'Stage 1 · Python 實用程式', months: 'M1–2', items: [
      ['基本語法不用 AI', '從空白檔案寫出條件、迴圈、function，30 分鐘內完成 3 個小題。'],
      ['List / Dict / Set', '給 5 個情境，能自己選資料結構並解釋為什麼。'],
      ['JSON / CSV', '自己讀取、轉換、過濾並寫出新檔案。'],
      ['Exception + Logging', '故意製造 3 種錯誤，程式能記錄並安全處理。'],
      ['REST API', '不用 AI 生成核心 code，呼叫 API、處理 status code、解析 JSON。'],
      ['150–300 行小工具', '獨立完成多檔案小工具，含 input、處理、輸出、錯誤處理。'],
      ['Python Debug', '修好 3 支故意弄壞的 script，能說出 root cause。']
    ]
  },
  {
    title: 'Stage 2 · Linux + Git', months: 'M1–2', items: [
      ['Linux 基礎操作', '不用查表完成檔案、權限、process、pipe、grep、curl、ssh 基本任務。'],
      ['Process / Port 除錯', '給一個 port 被占用或 service 沒起來的案例，自己定位並修復。'],
      ['PATH / Environment', '能解釋 PATH、env var，並修一個「command not found / wrong env」案例。'],
      ['Git 工作流', '自己 branch → commit → merge，並解一次 merge conflict。'],
      ['Diff / Revert', '看懂 diff，能安全撤回一個錯誤修改。']
    ]
  },
  {
    title: 'Stage 3 · Networking', months: 'M3–4', items: [
      ['IP / Subnet / Gateway / DNS / NAT', '白紙畫圖解釋一台筆電怎麼連到外網，不靠名詞背誦。'],
      ['TCP vs UDP', '能解釋 TCP handshake、可靠性與至少 3 個使用情境。'],
      ['網址輸入瀏覽器後發生什麼', '從 DNS → TCP → TLS → HTTP → server → response 完整講 5 分鐘。'],
      ['HTTP + TLS', '能解釋 method、status code、header、HTTPS，以及常見失敗點。'],
      ['Public / Private IP + Port + Firewall', '設計一個只能讓特定流量進入的規則並說明風險。'],
      ['VPC 紙上設計', '自己畫 public/private subnet、route table、IGW/NAT 的基本架構。'],
      ['四種網路故障', '各修一次 DNS、port、route、firewall 問題，並留下 root-cause note。']
    ]
  },
  {
    title: 'Stage 4 · Docker', months: 'M3–4', items: [
      ['Image / Container / Registry', '不用背定義，能用「程式怎麼從我電腦跑到別人機器」解釋。'],
      ['自己寫 Dockerfile', '把一個 Python API build 成 image 並成功啟動。'],
      ['Port / Volume / Env', '三者各做一個 lab，能解釋錯用會發生什麼。'],
      ['Container Debug', '修一個 build failure 與一個 runtime failure。'],
      ['Docker Compose', '跑起兩個互相連線的 service。']
    ]
  },
  {
    title: 'Stage 5 · AWS Foundations', months: 'M5–7', items: [
      ['IAM', '能設計 least-privilege role/policy，並修一個權限過大的案例。'],
      ['EC2', '自己 launch、連線、設定 security group、觀察 stop/terminate 差異。'],
      ['S3', '建立 bucket，測 permissions、lifecycle、static asset 使用。'],
      ['VPC', '自己建 subnet、route table、IGW/NAT，並說出資料流。'],
      ['RDS', '部署小型 DB，能解釋為何不用自己在 EC2 裝 DB。'],
      ['ELB + Auto Scaling', '能設計一個 AZ 掛掉仍可服務的 web 架構。'],
      ['Route 53 + CloudFront', '能說明 DNS 與 CDN 的角色，並完成基本配置。'],
      ['Lambda + API Gateway', '部署一個 serverless endpoint。'],
      ['CloudWatch', '做 metrics/logs/alarm，並用它找一個故障。'],
      ['Cost basics', '對同一需求提出 2 種架構並比較成本、可用性、維運。']
    ]
  },
  {
    title: 'Stage 6 · Architecture Thinking', months: 'M8–9', items: [
      ['3-tier architecture', '白板設計 web/app/db 三層系統並講清楚 traffic flow。'],
      ['AZ failure redesign', '假設一個 AZ 全掛，重新設計並指出 single point of failure。'],
      ['四大非功能需求', '能用例子區分 scalability、elasticity、availability、durability。'],
      ['EC2 vs ECS/Fargate vs Lambda', '3 個情境各選一個，且能說 trade-off。'],
      ['S3 vs EBS vs EFS', '3 個情境正確選擇並說明限制。'],
      ['RDS vs DynamoDB', '能根據 access pattern、consistency、scale 做選擇。'],
      ['Caching', '在設計中正確放入 CloudFront / ElastiCache 並說明 invalidation。'],
      ['完整架構圖', '一張圖同時標 security、observability、cost、failure mode。']
    ]
  },
  {
    title: 'Stage 7 · Security + Data', months: 'M8–9', items: [
      ['Least privilege 實作', '拿自己的 AWS 小專案做一次 permissions review。'],
      ['Encryption + KMS', '能解釋 transit/rest、KMS 角色，並指出什麼不該自己做。'],
      ['Secrets', '移除 code 裡的 credential，改用安全方式管理。'],
      ['SQL vs NoSQL', '4 個案例中能選 relational / key-value / document 並說理由。'],
      ['安全架構除錯', '修一個故意設計得過度開放的 cloud architecture。']
    ]
  },
  {
    title: 'Stage 8 · AI Solutions', months: 'M10', items: [
      ['AI 基礎名詞', '能向非工程師解釋 training、inference、token、embedding、vector search。'],
      ['API-based AI app', '自己做一個 Python 小程式呼叫模型 API，包含錯誤處理與成本意識。'],
      ['RAG demo', '用自己的文件做 retrieval + generation，能說明每個步驟。'],
      ['AI trade-offs', '能討論 hallucination、grounding、latency、cost、evaluation。'],
      ['Edge → Cloud 故事', '把 Jetson/YOLO 經驗重畫成 edge + cloud 架構並講 trade-off。'],
      ['5 分鐘非技術簡報', '不看稿向非工程師解釋一個 AI solution，對方能復述重點。']
    ]
  },
  {
    title: 'Stage 9 · SA Communication', months: 'M11', items: [
      ['Customer discovery', '15 分鐘 mock 中先問需求、限制、成功指標，不急著推產品。'],
      ['Requirements first', '面對模糊題目至少問出 user、traffic、security、budget、availability。'],
      ['兩套方案 + trade-off', '同一問題提出方案 A/B，說明成本、風險、速度與未來擴充。'],
      ['8 分鐘英文架構簡報', '不用讀稿，能清楚開場、架構、trade-off、結論。'],
      ['處理追問與異議', '5 個問題中，不知道時能說不知道並提出驗證方法，不亂猜。'],
      ['一頁 solution summary', '寫出 problem、requirements、architecture、trade-offs、next steps。']
    ]
  },
  {
    title: 'Stage 10 · Capstone + Recruiting', months: 'M12', items: [
      ['端到端 Cloud Solution', '自己部署一個可公開 demo 的完整 solution。'],
      ['Architecture Pack', '完成圖、README、cost estimate、security notes、failure modes。'],
      ['10 分鐘英文 Demo', '錄影後自評：結構、清楚度、技術正確性、贅詞。'],
      ['3 次 SA Mock ≥80%', '用固定 rubric 做三次，不是只靠感覺。'],
      ['SAA 練習考 ≥80% ×2', '兩次 timed mock 都達標後才安排正式考試。'],
      ['AWS SAA-C03', '完成真正考試；證照是驗證，不是取代 hands-on。'],
      ['Resume bullets', '每條都有 action、技術、結果或 impact，不寫空泛「familiar with」。'],
      ['8 個 STAR stories', '每個故事 2 分鐘內可講完，至少涵蓋 conflict、failure、ambiguity、leadership。'],
      ['30 份相關投遞', '跨公司投 Associate SA / Solutions Engineer / Cloud Solutions / Technical Sales 類職缺。']
    ]
  }
];

const roadmapEl = document.getElementById('roadmap');
const storageKey = 'cloud-ai-roadmap-v1';
const feedbackKey = 'cloud-ai-feedback-v1';
let state = JSON.parse(localStorage.getItem(storageKey) || '{}');
let activeFilter = 'all';

function idFor(s, i){ return `s${s}-i${i}`; }
function allItems(){ return stages.flatMap((stage,s)=>stage.items.map((item,i)=>({stage,s,item,i,id:idFor(s,i)}))); }

function render(){
  roadmapEl.innerHTML='';
  stages.forEach((stage,s)=>{
    const shown = stage.items.map((item,i)=>({item,i,id:idFor(s,i),done:!!state[idFor(s,i)]}))
      .filter(x=>activeFilter==='all'||(activeFilter==='done'&&x.done)||(activeFilter==='todo'&&!x.done));
    if(!shown.length) return;
    const totalDone = stage.items.filter((_,i)=>state[idFor(s,i)]).length;
    const wrap=document.createElement('article'); wrap.className='stage';
    wrap.innerHTML=`<div class="stage-head"><div><h3>${stage.title}</h3><div class="stage-meta">${stage.months}</div></div><div class="stage-meta">${totalDone}/${stage.items.length}</div></div><div class="milestones"></div>`;
    const list=wrap.querySelector('.milestones');
    shown.forEach(({item,i,id,done})=>{
      const row=document.createElement('label'); row.className='milestone'+(done?' done':'');
      row.innerHTML=`<input type="checkbox" ${done?'checked':''} data-id="${id}"><div><div class="m-title">${item[0]}</div><div class="m-test"><strong>過關條件：</strong>${item[1]}</div><span class="tag">Recall → Debug → Transfer</span></div>`;
      list.appendChild(row);
    });
    roadmapEl.appendChild(wrap);
  });
  updateStats();
}

function updateStats(){
  const items=allItems();
  const done=items.filter(x=>state[x.id]).length;
  const pct=Math.round(done/items.length*100);
  document.getElementById('doneCount').textContent=done;
  document.getElementById('totalCount').textContent=items.length;
  document.getElementById('progressPct').textContent=`${pct}%`;
  document.getElementById('progressBar').style.width=`${pct}%`;
  const feedback=JSON.parse(localStorage.getItem(feedbackKey)||'[]');
  document.getElementById('streak').textContent=feedback.length;
}

roadmapEl.addEventListener('change',e=>{
  if(e.target.matches('input[type=checkbox]')){
    state[e.target.dataset.id]=e.target.checked;
    localStorage.setItem(storageKey,JSON.stringify(state)); render();
  }
});

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); activeFilter=btn.dataset.filter; render();
}));

document.getElementById('resetBtn').addEventListener('click',()=>{
  if(confirm('確定要清掉這台裝置的所有勾選嗎？GitHub Issue 不會被影響。')){
    state={}; localStorage.removeItem(storageKey); render();
  }
});

function renderFeedback(){
  const entries=JSON.parse(localStorage.getItem(feedbackKey)||'[]');
  const list=document.getElementById('feedbackList'); list.innerHTML='';
  entries.slice().reverse().slice(0,12).forEach(entry=>{
    const div=document.createElement('div'); div.className='feedback-item';
    div.innerHTML=`<strong>${escapeHtml(entry.skill)}</strong><small> · ${new Date(entry.time).toLocaleString()}</small><div>${escapeHtml(entry.text).replace(/\n/g,'<br>')}</div>`;
    list.appendChild(div);
  });
  updateStats();
}

function escapeHtml(str){ return str.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c])); }

document.getElementById('saveFeedback').addEventListener('click',()=>{
  const skill=document.getElementById('skillInput').value.trim();
  const text=document.getElementById('feedbackInput').value.trim();
  if(!skill||!text) return alert('先填今天練什麼，以及四句反饋。');
  const entries=JSON.parse(localStorage.getItem(feedbackKey)||'[]');
  entries.push({skill,text,time:Date.now()});
  localStorage.setItem(feedbackKey,JSON.stringify(entries));
  document.getElementById('skillInput').value=''; document.getElementById('feedbackInput').value=''; renderFeedback();
});

render(); renderFeedback();
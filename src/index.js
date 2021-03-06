import './styles.css';

// TODOの追加
const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = ''; // テキストの値を初期化

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
};

// 未完了リストに追加
const createIncompleteList = (text) => {
  // divタグ生成
  const div = document.createElement('div');
  div.className = 'list-row';

  // liタグ生成
  const li = document.createElement('li');
  li.innerText = text;

  // 完了ボタンの生成
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    // 完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromImcompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    // liタグを生成
    const li = document.createElement('li');
    li.innerText = text;

    // 戻すボタンの生成
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      // 戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById('complete-list').removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了ボタンの親タグ(div)を完了リストに追加
    document.getElementById('complete-list').appendChild(addTarget);
  });

  // 削除ボタンの生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    // 削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById('incomplete-list').appendChild(div);
};

// TODOの追加ボタン
document
  .getElementById('add-button')
  .addEventListener('click', () => onClickAdd());

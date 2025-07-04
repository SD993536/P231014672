"use client";

import { useState } from "react";

export default function HomeworkPage() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  const homework1 = `
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>作业1</title>
</head>
<body>

</body>
</html>
`;

  const homework2 = `
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的有趣网页练习</title>
</head>
<body>
    <h1>这是我精心制作的页面一级标题</h1>
    <div>
        <h2>输入表单元素</h2>
        <form action="https://www.baidu.com/s">
        <input type="text" name="wd" >
        <input type="submit" value="搜索">
    </form>
    </div>
    <div>
        <p>
            这里展示一些个人的信息和爱好介绍。
        </p >
        <ol>
            <li>
                第一步：打开书本
            </li>
            <li>
                第二步：开始阅读
            </li>
            <li>
                第三步：合上书本
            </li>
        </ol>
        <ul>
            <li>香蕉</li>
            <li>橙子</li>
            <li>西红柿</li>
        </ul>
   </div>
   <div>
    <h2>这是新的部分标题<br><span>这是相关副标题</span></h2>
    <p>这是一段文字，会用到行内元素，比如a、img等。</p >
   </div>
   <div>
    <p>
        <img src="https://example.com/images/book.jpg" alt="一本有趣的书" width="200" />
        <img src="https://img1.doubanio.com/img/niffler/r/c3ab871e-2401-11e7-9fe8-0242ac110046.png" alt="示例图片" />
    </p >
    <p>
        <iframe src="//player.youku.com/embed/XNTE0Mzc3MDY0MA==" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen={true} width="400"></iframe>
    </p >
    <p>
        <img src="https://example.com/images/school_logo.svg" alt="学校校徽" width="200" />
    </p >
   </div>
   <div>
    <h2>新的表格相关元素</h2>
    <table>
        <tr><td>3.1</td><td>3.2</td><td>3.3</td></tr>
        <tr><td>4.1</td><td>4.2</td><td>4.3</td></tr>
    </table>
   </div>
</body>
</html>
`;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">过往作业展示</h1>

      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSelectedPage("homework1")}
          className={`px-4 py-2 rounded-md ${
            selectedPage === "homework1"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          作业1
        </button>
        <button
          onClick={() => setSelectedPage("homework2")}
          className={`px-4 py-2 rounded-md ${
            selectedPage === "homework2"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          作业2
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {selectedPage === "homework1" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">作业1 源代码：</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{homework1}</code>
            </pre>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">预览：</h2>
              <div className="border rounded-md p-4">
                <iframe
                  srcDoc={homework1}
                  className="w-full min-h-[500px]"
                  title="作业1预览"
                />
              </div>
            </div>
          </div>
        )}

        {selectedPage === "homework2" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">作业2 源代码：</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{homework2}</code>
            </pre>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">预览：</h2>
              <div className="border rounded-md p-4">
                <iframe
                  srcDoc={homework2}
                  className="w-full min-h-[500px]"
                  title="作业2预览"
                />
              </div>
            </div>
          </div>
        )}

        {!selectedPage && (
          <div className="text-center text-gray-500">请选择要查看的作业</div>
        )}
      </div>
    </div>
  );
}

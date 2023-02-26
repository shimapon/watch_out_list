import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

type Check = {
  title: string;
  checklist: { title: string; description: string; isOpen: boolean }[];
};

const checkList: Check[] = [
  {
    title: "コードレビュー",
    checklist: [
      {
        title: "一日以内に返信するしかない",
        description: "説明が長いですわあああああ",
        isOpen: false,
      },
      {
        title: "リスペクトを持つ",
        description: "説明が長いですわあああああ",
        isOpen: true,
      },
      {
        title: "重複を気にする",
        description: "説明が長いですわあああああ",
        isOpen: false,
      },
    ],
  },
  {
    title: "Code Review",
    checklist: [
      {
        title: "一日以内に返信するしかない",
        description: "説明が長いですわあああああ",
        isOpen: true,
      },
      {
        title: "リスペクトを持つ",
        description: "説明が長いですわあああああ",
        isOpen: true,
      },
    ],
  },
  {
    title: "9文字以上は丸める",
    checklist: [
      {
        title: "一日以内に返信するしかない",
        description: "説明が長いですわあああああ",
        isOpen: true,
      },
    ],
  },
];

const Home = () => {
  const [isOpen, setOpen] = useState(0);

  return (
    <div>
      {isOpen === -1 ? (
        <div>
          <div className="text-3xl text-center pt-12">気を付けたい</div>
          <div className="bg-white w-full h-screen rounded-t-3xl shadow-2xl pt-12 mt-8">
            <div className="grid grid-cols-2 gap-4 px-4">
              {checkList.map((check: Check, index: number) => {
                return (
                  <button
                    type="button"
                    className=" text-center text-lg px-2 py-8 rounded bg-[#525252] text-white shadow"
                    key={"checkList_" + index}
                  >
                    {check.title}
                  </button>
                );
              })}
            </div>
          </div>
          <button className="fixed right-2 bottom-2 bg-[#525252] rounded-full p-6 text-white shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div>
          <div className="bg-white w-full h-screen rounded-t-3xl shadow-2xl pt-12 mt-8">
            <div className="text-3xl text-center">
              {checkList[isOpen].title}
            </div>

            {checkList[isOpen].checklist.map((check, index: number) => {
              return (
                <div key={"topic_" + index} className="my-4">
                  <div className="grid grid-cols-3 gap-4 px-2 place-items-center">
                    <div className="rounded-full border border-b-2 border-black p-2 col-span-1">
                      {!check.isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      ) : (
                        <div className="w-6 h-6"></div>
                      )}
                    </div>
                    <div className="col-span-2 text-lg">{check.title}</div>
                  </div>
                  {check.isOpen && (
                    <div className="p-2">{check.description}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

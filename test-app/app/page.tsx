"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

type getTestType = {
  name: "string";
};

export default function Home() {
  const [date, setDate] = useState<any>("계산 중..");
  const [testData, setTestData] = useState<any>("확인 중..");
  const [checkTest, setCheckTest] = useState(false);

  const getTest = async () => {
    try {
      const nameData = await axios.get("/test");
      setTestData(nameData.data.name);
      setCheckTest(true);
    } catch (err) {
      setTestData("서버 연동 실패");
      setCheckTest(false);
    }
  };

  const getKTime = () => {
    const curr = new Date();
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000; //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
    const kr_curr = new Date(utc + KR_TIME_DIFF); //UTC 시간을 한국 시간으로 변환하기 위해 utc 밀리초 값에 9시간을 더함.
    console.log(kr_curr);
    return kr_curr;
  };

  useEffect(() => {
    const nowDate = getKTime();
    setDate(`${nowDate}`);
    getTest();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">bloggy server test</h1>
      <div className="flex items-center">
        <p className="text-xl font-semibold">서버 연동 테스트 : {testData}</p>
        {checkTest ? (
          <AiOutlineCheckCircle className="text-green-700" />
        ) : (
          <AiOutlineCloseCircle className="text-red-700" />
        )}
      </div>
      <p className="text-lg">진입 시간 : {date}</p>
    </main>
  );
}

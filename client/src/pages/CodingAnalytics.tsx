import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import CodingHistory from "@/components/dashboard/CodingHistory";
import CodingStats from "@/components/dashboard/CodingStats";

import { getCodingHistory } from "@/services/codingHistory";
import CodingPerformanceChart from "@/components/dashboard/CodingPerformanceChart";
import AIRoadmap from "@/components/dashboard/AIRoadmap";

const CodingAnalytics = () => {

    const [history,setHistory]=useState<any[]>([]);

    useEffect(()=>{

        load();

    },[]);

    const load=async()=>{

        const data=await getCodingHistory();

        setHistory(data);

    }

    const average=useMemo(()=>{

        if(history.length===0) return 0;

        return Math.round(

            history.reduce(

                (sum,item)=>sum+item.final_score,

                0

            )/history.length

        )

    },[history]);

    const best=useMemo(()=>{

        if(history.length===0) return 0;

        return Math.max(...history.map(x=>x.final_score));

    },[history]);

    return(

        <DashboardLayout>

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold text-white">

                        Coding Analytics

                    </h1>

                    <p className="mt-2 text-zinc-400">

                        Track your AI interview performance.

                    </p>

                </div>

                <CodingStats

                    total={history.length}

                    average={average}

                    best={best}

                />
                <CodingPerformanceChart history={history} />
                <AIRoadmap average={average} />

                <CodingHistory/>

            </div>

        </DashboardLayout>

    )

}

export default CodingAnalytics;
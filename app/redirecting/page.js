"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

function page() {
  const se = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const key = se.get("key");
    if (key) {
      const id = sessionStorage.getItem("id");
      if (id) {
        window.opener.postMessage(id, "http://localhost:3000/login");
        setTimeout(() => {
          window.close();
        }, 2000);
      } else {
        router.push("/login");
      }
    }
  }, []);

  return <div>Wait</div>;
}

export default page;

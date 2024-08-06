// 서버 컴포넌트가 아닌 클라이언트 컴포넌트를 사용하기 위해 선언
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo =  () => {
	const router = useRouter();

	return (
		<Image
		 alt="Logo"
		 className="hidden md:block cursor-pointer"
		 height="100"
		 width="100"
		 src="/images/logo.png"
		/>
		
	)
} 

export default Logo;

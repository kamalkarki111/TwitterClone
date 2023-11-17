import LeftBar from "@/components/header.component";
import RightBar from "@/components/tweet/right-bar.component";

export default function Layout({children}:any){
    return (
        <div className="flex">
          <LeftBar></LeftBar>
            {children}
          <RightBar></RightBar>
          </div>
    )
}
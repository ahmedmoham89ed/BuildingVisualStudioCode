import React, { ReactNode } from "react";
import {PanelGroup,Panel,PanelResizeHandle} from "react-resizable-panels";
interface Iprops{
    defaultLayout?: number[] | undefined;
    leftPanel:ReactNode,
    rightPanel:ReactNode,
    showPanel:boolean
}
const ResizeAblePannel= ({ defaultLayout = [20, 67],leftPanel,rightPanel,showPanel}:Iprops) => {
    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
      };
  return (
    <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="conditional">
        {showPanel &&<>       
            <Panel defaultSize={defaultLayout[0]} collapsible >
                {leftPanel}
            </Panel>
        <PanelResizeHandle className="border-r-2 border-[#ffffff1f]" />
        </>}
        <Panel defaultSize={defaultLayout[1]} >
            {rightPanel}
        </Panel>
    </PanelGroup>
  )
}

export default ResizeAblePannel
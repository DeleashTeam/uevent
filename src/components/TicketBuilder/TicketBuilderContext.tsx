import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { RenderComponent } from "./CanvasRenderer";
import Vector2 from "./CanvasRenderer/Vector2";
import ComponentsService from "./ComponentsService";

export type TicketBuilderContextType = {
    ticketItems: {
        isPlaces: boolean,
        eventName: string,
        cost: number,
    },
    setTicketItems: Dispatch<SetStateAction<{
        isPlaces: boolean;
        eventName: string;
        cost: number;
    }>> | null,
    ticketSize: Vector2,
    setTicketSize: Dispatch<SetStateAction<Vector2>> | null,
    renderComponents: RenderComponents | null,
    rcService: ComponentsService | null,
    renderComponentsArray: RenderComponent[]
}

const defaultTicketItems = {
    isPlaces: false,
    eventName: "",
    cost: 0,
}

const defaultContextValues: TicketBuilderContextType = {
    ticketItems: defaultTicketItems,
    setTicketItems: null,
    ticketSize: { x: 500, y: 300 },
    setTicketSize: null,
    renderComponents: null,
    rcService: null, 
    renderComponentsArray: []
}

export class RenderComponents {

    setRenderComponents: Dispatch<SetStateAction<RenderComponent[]>>
    renderComponents: RenderComponent[]

    constructor(renderComponents: RenderComponent[], setRenderComponents: Dispatch<SetStateAction<RenderComponent[]>>) {
        this.renderComponents = renderComponents;
        this.setRenderComponents = setRenderComponents;
    }

    updateRenderComponents(renderComponentsArray: RenderComponent[]) {
        this.renderComponents = renderComponentsArray;
        console.log("render components", this.renderComponents);
    }

    addComponent(rc: RenderComponent) {
        const newArr = [...this.renderComponents, rc];
        this.setRenderComponents(newArr);
        
    }

    updateComponent(rc: RenderComponent) {
        const index = this.renderComponents.findIndex((v) => v === rc)
        const prev = this.renderComponents.slice(0, index);
        const after = this.renderComponents.slice(index + 1, this.renderComponents.length);
        this.setRenderComponents(prev.concat(rc).concat(after));
    }

    deleteComponent(rc: RenderComponent) {
        this.setRenderComponents(this.renderComponents.filter(v => v !== rc));
    }

}

export const TicketBuilderContext = createContext(defaultContextValues);

export default function TicketBuilderContextWrapper({ children }) {

    const [ticketItems, setTicketItems] = useState(defaultTicketItems);
    const [ticketSize, setTicketSize] = useState(new Vector2(500, 300));
    const [renderComponentsArray, setRenderComponentsArray] = useState<RenderComponent[]>([]);
    const [renderComponents] = useState(new RenderComponents(renderComponentsArray, setRenderComponentsArray));

    useEffect(() => {

        renderComponents.updateRenderComponents(renderComponentsArray);

    }, [renderComponentsArray]);

    const [rcService] = useState(new ComponentsService(renderComponents));

    return (
        <div>
            <TicketBuilderContext.Provider value={{
                ticketItems,
                setTicketItems,
                ticketSize,
                setTicketSize,
                renderComponents: renderComponents,
                rcService,
                renderComponentsArray
            }}>

                {children}

            </TicketBuilderContext.Provider>
        </div>
    )

}
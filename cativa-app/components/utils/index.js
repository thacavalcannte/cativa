import { ConfigProvider } from "./Config";

export function AppProvider({children}){
    return(
        <ConfigProvider>
            {children}
        </ConfigProvider>
    );
}

export default interface RoutesList {
    path: string;
    component: (props: any) => JSX.Element;
    canActivate: () => boolean;
}
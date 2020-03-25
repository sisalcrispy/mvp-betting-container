export default interface RouteGuardProps{
    Component: (props: any) => JSX.Element;
    canActivate: () => boolean
}
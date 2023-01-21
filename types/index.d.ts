declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.png";
declare module "*.svg" {
  React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

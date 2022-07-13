type Url = string;

type TProjectId = string;

type TProject = {
    id: TProjectId;
    title_project: string;
    img_url: string;
    description: string;
    attributes: {
        details: string;
        img_urls: string[];
    }
}
declare module '*.ttf';
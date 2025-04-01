
export type CODE_CHALLENGE = {
    title: string;
    des: string;
    headIcon?: string;
    links: Array<{
        link: string;
        icon: string;
        tooltip: string;
    }>;
    techs: Array<{
        name: string;
        icon: string;
    }>;
}

export type CODE_CHALLENGES = Array<CODE_CHALLENGE>;
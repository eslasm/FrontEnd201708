namespace Helper{
    console.log('helper.ts');

    export const getHTMLTemplate = (file: string) => {
        let templateHTML = 'fail';
        let xmlHttp =  new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) { // 200 succsessful
                templateHTML = this.responseText;
            }
        };
        xmlHttp.open('GET', file. false);
        xmlHttp.send();
        return templateHTML;
    }
    export const parseHTMLString(target: string, mustache: string, content: string) => {
        return target.replace(mustache, content);
    };
}
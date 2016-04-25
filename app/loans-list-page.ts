import {Component} from "angular2/core";

@Component({
    selector: "loans-list-page",
    template: `
    <StackLayout>
    <Label text="LOANSLISTPAGE"></Label>
    <ListView [items]="items">
        <template #item="item">
            <Label [text]="item"></Label>
        </template>
    </ListView>
    </StackLayout>
`,
})
export class LoansListPage {
    public items: Number[];

    constructor() {
        this.items = []
        for (let i = 0; i < 50; i++) {
            this.items.push(i);
        }
    }
}

import { Component, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-load-draft',
  templateUrl: './load-draft.component.html',
  styleUrls: ['./load-draft.component.scss']
})
export class LoadDraftComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<LoadDraftComponent>) { }

  ngOnInit() { }

  public close(action: boolean): void {
    this.dialogRef.close(action);
  }

}

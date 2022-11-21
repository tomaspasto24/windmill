import { Component, OnInit, Input } from '@angular/core';
import { Piece } from '../WindmillInterfaces/Piece';
import { PiecesService } from '../pieces.service';
import { Windmill } from '../WindmillInterfaces/Windmill';
@Component({
  selector: 'app-windmill-model',
  templateUrl: './windmill-model.component.html',
  styleUrls: ['./windmill-model.component.scss']
})
export class WindmillModelComponent implements OnInit {

  constructor(private pieces: PiecesService) { }

  ngOnInit(): void {
  }

  @Input() windmill: Windmill | undefined;
  
  @Input() allowEdit: boolean = false;
}

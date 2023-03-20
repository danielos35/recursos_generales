/**
 * 
 * <div class="item_t">
    <mat-form-field appearance="outline" style="transform: translateY(10px) scale(0.9);">
      <mat-select [disabled]="guardando" [(ngModel)]="cliente.cliente_estado_id" (valueChange)="guardarDatosCliente($event, 'estado')" >
        <mat-option *ngFor="let item of estados || []" [value]="item.id" style="font-size: 0.7rem;">
          {{item.nombre}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  </div>
 * 
 * */ 


/* 
TS


  guardarDatosCliente(data:any, tipoDeDato:any){
    if(tipoDeDato === 'estado') // --> asignar datos capturados, pues por defecto no asigna el valor seleccionado

*/
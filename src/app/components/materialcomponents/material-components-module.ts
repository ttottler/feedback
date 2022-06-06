import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatRippleModule, MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS} from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTreeModule } from '@angular/material/tree';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentDateAdapter, MomentDateModule} from '@angular/material-moment-adapter';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { MY_FORMATS } from 'src/app/libraries/custom-library/custom-date-format';
import { DatePipe } from '@angular/common';
// import { NgxMaterialRatingModule } from 'ngx-material-rating';
@NgModule(
    {
        declarations: [ ]
        , exports: [
            CdkTableModule
            ,CdkTreeModule
            ,MomentDateModule
            ,FlexLayoutModule
            ,MatAutocompleteModule
            ,MatBadgeModule
            , MatBottomSheetModule
            , MatButtonModule
            , MatButtonToggleModule
            , MatCardModule
            , MatCheckboxModule
            , MatChipsModule
            , MatStepperModule
            , MatDialogModule
            , MatDividerModule
            , MatExpansionModule
            , MatGridListModule
            , MatIconModule
            , MatInputModule
            , MatListModule
            , MatMenuModule
            , MatNativeDateModule
            , MatPaginatorModule
            , MatProgressBarModule
            , MatProgressSpinnerModule
            , MatRadioModule
            , MatSelectModule
            , MatRippleModule
            , MatSidenavModule
            , MatSliderModule
            , MatSlideToggleModule
            , MatSnackBarModule
            , MatSortModule
            , MatTableModule
            , MatTabsModule
            , MatTooltipModule
            , MatTreeModule
            , MatToolbarModule
            , MatDatepickerModule
            , MatRippleModule
            , MatNativeDateModule
            , NgxStarRatingModule
        ],
        providers: [
          DatePipe,
          { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
          { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
        ]

    }
)
export class MaterialComponentsModule {
}
